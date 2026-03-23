from pydantic import BaseModel
from typing import List, Dict, Any

class FundDetails(BaseModel):
    fund_name: str
    scheme_type: str
    units: float
    nav: float
    current_value: float
    amounts_invested: float

class PortfolioAnalysisResponse(BaseModel):
    funds: List[FundDetails]
    xirr: Dict[str, float]
    ai_analysis: Dict[str, Any]
    charts_data: Dict[str, Any]
