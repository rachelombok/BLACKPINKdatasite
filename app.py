from flask import Flask
from flask import Flask, render_template, request, redirect, url_for, flash, session, jsonify
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/home')
def testhome():
    return render_template('home.html')

@app.route('/bpmap')
def bpmap():
    return render_template("bpmap.html")

@app.route('/chart')
def chart():
    return render_template('chart.html')

@app.route('/poem')
def poem():
    return render_template('poem.html')