from fastapi import APIRouter, HTTPException
from typing import List
from services import github

router = APIRouter()

@router.get("/search/{username}/{keyword}", response_model=List[github.Repository])
async def search_repositories(username: str, keyword: str):
    try:
        return github.search_repositories(username, keyword)
    except Exception as e:
        raise HTTPException(status_code=500)
