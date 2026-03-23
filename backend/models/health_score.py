from pydantic import BaseModel
from typing import Dict, List, Optional

class HealthScoreInput(BaseModel):
    scores: Dict[str, float]

class ActionItem(BaseModel):
    priority: int
    action: str
    impact: str
    effort: str

class HealthScoreResponse(BaseModel):
    overall_score: int
    dimension_scores: Dict[str, int]
    grade: str
    action_items: List[ActionItem]
