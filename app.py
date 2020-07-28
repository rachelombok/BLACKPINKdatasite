from flask import Flask
from flask import Flask, render_template, request, redirect, url_for, flash, session, jsonify
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/bpmap')
def bpmap():
    return render_template("bpmap.html")