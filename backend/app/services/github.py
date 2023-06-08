import httpx
from pydantic import BaseModel
from typing import List

class Repository(BaseModel):
    id: int
    name: str
    html_url: str
    description: str

def search_repositories(username: str, keyword: str) -> List[Repository]:
    response = httpx.get(f'https://api.github.com/search/repositories?q={keyword}+user:{username}')
    response.raise_for_status()
    data = response.json()
    return [Repository(**repo) for repo in data["items"][:50]]


