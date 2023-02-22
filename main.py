from flask import Flask



app = Flask(__name__)


value = 0

@app.route('/index')
@app.route('/')
def index():
    global value
    val = value
    value += 1

    return f'The page was loaded {val} times'


@app.route('/about')
def about():
    return '<h1>About</h1>'







if __name__ == '__main__':
    app.run(debug=True)