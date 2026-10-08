from showcaselab.bl import moderation
from showcaselab.bl.moderation import is_spammy, moderate_guestbook


def test_short_message_is_spam() -> None:
    assert is_spammy("x") == "too_short"


def test_repeats_are_spam() -> None:
    assert is_spammy("hello " + "a" * 10) == "repeats"


def test_too_many_links_are_spam() -> None:
    assert is_spammy("see https://a.com http://b.com www.c.com") == "links"


def test_clean_message_passes() -> None:
    moderation._recent_posts.clear()
    assert moderate_guestbook("Anton", "Hello from the lab", "test-client") is None


def test_profanity_in_message() -> None:
    moderation._recent_posts.clear()
    assert moderate_guestbook("Anton", "what the fuck", "test-client") == "profanity"


def test_profanity_in_author() -> None:
    moderation._recent_posts.clear()
    assert moderate_guestbook("сука", "nice portfolio", "test-client") == "profanity"


def test_rate_limit() -> None:
    moderation._recent_posts.clear()
    key = "rate-client"
    assert moderate_guestbook("Anton", "first note", key) is None
    moderation.remember_post(key)
    assert moderate_guestbook("Anton", "second note", key) is None
    moderation.remember_post(key)
    assert moderate_guestbook("Anton", "third note", key) == "rate"
