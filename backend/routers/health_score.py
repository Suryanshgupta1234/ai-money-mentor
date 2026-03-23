from fastapi import APIRouter
from models.health_score import HealthScoreInput, HealthScoreResponse

router = APIRouter()

@router.post("/analyze", response_model=HealthScoreResponse)
async def analyze_health_score(data: HealthScoreInput):
    # TODO: Implement Claude AI for action items
    return {
        "overall_score": 50,
        "dimension_scores": data.scores,
        "grade": "Needs Work",
        "action_items": []
    }
