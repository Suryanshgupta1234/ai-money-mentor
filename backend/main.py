from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import portfolio, health_score

app = FastAPI(title="AI Money Mentor API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(portfolio.router, prefix="/api/portfolio", tags=["Portfolio"])
app.include_router(health_score.router, prefix="/api/health", tags=["Health Score"])

@app.get("/")
def read_root():
    return {"message": "Welcome to AI Money Mentor API"}
