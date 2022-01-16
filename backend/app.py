from flask import Flask, jsonify
from flask_cors import CORS
from api.nhlapi import getTeams

app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/teams")
def teams():
    response = getTeams()
    print(response)
    return jsonify(response)
