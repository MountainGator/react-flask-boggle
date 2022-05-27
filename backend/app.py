from flask import Flask, render_template, jsonify, request, session, Response
from boggle import Boggle

game = Boggle()

app = Flask(__name__)
app.config["SECRET_KEY"] = "SUPERsecretReactApp69"

@app.route("/makeboard", methods=["GET"])
def hello_world():
    """
    respond to front end call with an array of strings that I can use to make a board
    """
    board = game.make_board()
    session['board'] = board
    print(session['board'])
    return jsonify(board)

@app.route('/guess', methods=['POST'])
def check_guess():
    """
    collect front end post request and check if it's valid. Return results
    """
    print('request body:',request.json)
    guess = request.json
    board = session['board']
    res = game.check_valid_word(board, guess)
    return Response(res, status=200)




app.run()