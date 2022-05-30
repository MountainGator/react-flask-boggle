from flask import Flask, render_template, jsonify, request, session, Response
from boggle import Boggle

game = Boggle()
session['tries'] = 0

app = Flask(__name__)
app.config["SECRET_KEY"] = "SUPERsecretReactApp69"

@app.route('/')
def home_route():
    """
    render home template
    """
    return render_template('index.html')

@app.route("/makeboard", methods=["GET"])
def hello_world():
    """
    respond to front end call with an array of strings that I can use to make a board
    """
    board = game.make_board()
    session['board'] = board
    print(session['board'])
    return jsonify(board)

@app.route('/set_tries', methods=['POST'])
def add_num():
    session['tries'] += 1
    print('number of tries:', session['tries'])
    return Response('OK', status=200)

@app.route('/get_tries')
def num_tries():
    tries = session['tries']
    return jsonify({'number': tries})

@app.route('/guess', methods=['POST'])
def check_guess():
    """
    collect front end post request and check if it's valid. Return results
    """
    print('request body:',request.json)
    guess = request.json['guess']
    board = session['board']
    res = game.check_valid_word(board, guess)
    if res == 'Ok':
        return Response('OK', status=200)
    else: return Response('Wrong', status=204)






app.run()