from fastapi import FastAPI, HTTPException
from routers import search
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
app = FastAPI()
#ネットワークエラーを避ける
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,   # 追記により追加
    allow_methods=["*"],      # 追記により追加
    allow_headers=["*"]       # 追記により追加
)


# ルーティングなどの定義

app.include_router(search.router)