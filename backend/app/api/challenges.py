from fastapi import APIRouter, HTTPException, Query

from app.challenges_data import (
    CHALLENGES,
    check_bug_fix,
    check_bug_line,
    public_challenge,
)
from app.schemas import (
    ChallengeOut,
    ChallengesResponse,
    CheckFixIn,
    CheckLineIn,
    CheckOut,
    Framework,
)

router = APIRouter(prefix="/api", tags=["challenges"])


@router.get("/challenges", response_model=ChallengesResponse)
def list_challenges(framework: Framework = Query(...)) -> ChallengesResponse:
    items = CHALLENGES.get(framework)
    if not items:
        raise HTTPException(status_code=404, detail="Unknown framework")
    return ChallengesResponse(
        framework=framework,
        total=len(items),
        items=[ChallengeOut.model_validate(public_challenge(ch)) for ch in items],
    )


@router.post("/challenges/{challenge_id}/check-line", response_model=CheckOut)
def check_line(challenge_id: str, payload: CheckLineIn) -> CheckOut:
    result = check_bug_line(payload.framework, challenge_id, payload.line)
    if result is None:
        raise HTTPException(status_code=404, detail="Challenge not found")
    return CheckOut(ok=result)


@router.post("/challenges/{challenge_id}/check-fix", response_model=CheckOut)
def check_fix(challenge_id: str, payload: CheckFixIn) -> CheckOut:
    result = check_bug_fix(payload.framework, challenge_id, payload.fix_id)
    if result is None:
        raise HTTPException(status_code=404, detail="Challenge or fix not found")
    return CheckOut(ok=result)
