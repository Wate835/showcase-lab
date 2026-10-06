from showcaselab.bl.challenges_data import (
    CHALLENGES,
    check_bug_fix,
    check_bug_line,
    public_challenge,
)
from showcaselab.bl.errors import NotFoundError
from showcaselab.models.challenges import (
    ChallengeResponse,
    ChallengesResponse,
    CheckFixRequest,
    CheckLineRequest,
    CheckResponse,
)
from showcaselab.models.common import Framework, Lang


def list_challenges(framework: Framework, lang: Lang) -> ChallengesResponse:
    items = CHALLENGES.get(framework)
    if not items:
        raise NotFoundError("Unknown framework")
    return ChallengesResponse(
        framework=framework,
        total=len(items),
        items=[ChallengeResponse.model_validate(public_challenge(ch, lang)) for ch in items],
    )


def check_line(challenge_id: str, payload: CheckLineRequest) -> CheckResponse:
    result = check_bug_line(payload.framework, challenge_id, payload.line)
    if result is None:
        raise NotFoundError("Challenge not found")
    return CheckResponse(ok=result)


def check_fix(challenge_id: str, payload: CheckFixRequest) -> CheckResponse:
    result = check_bug_fix(payload.framework, challenge_id, payload.fix_id)
    if result is None:
        raise NotFoundError("Challenge or fix not found")
    return CheckResponse(ok=result)
