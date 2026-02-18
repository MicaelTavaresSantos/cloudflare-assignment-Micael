from flask import Flask, request

app = Flask(__name__)

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def headers(path):
    return "\n".join([f"{k}: {v}" for k, v in request.headers.items()])
