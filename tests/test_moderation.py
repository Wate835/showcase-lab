from showcaselab.bl.moderation import is_spammy, moderate_guestbook


def test_short_message_is_spam() -> None:
    assert is_spammy("x") == "too_short"


def test_clean_message_passes() -> None:
    assert moderate_guestbook("Anton", "Hello from the lab", "test-client") is None
