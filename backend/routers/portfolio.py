from fastapi import APIRouter, File, UploadFile

router = APIRouter()

@router.post("/analyze")
async def analyze_portfolio(file: UploadFile = File(...)):
    # TODO: Extract data, calc XIRR, run Claude
    return {
        "funds": [],
        "xirr": {},
        "ai_analysis": {},
        "charts_data": {}
    }
