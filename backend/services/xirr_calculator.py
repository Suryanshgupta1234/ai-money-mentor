from pyxirr import xirr
import pandas as pd
from typing import List, Dict

def calculate_portfolio_xirr(transactions: List[Dict[str, float]]) -> float:
    if not transactions:
        return 0.0
    df = pd.DataFrame(transactions)
    if df['amount'].max() <= 0 or df['amount'].min() >= 0:
        return 0.0
    try:
        return xirr(df['date'], df['amount'])
    except Exception:
        return 0.0
