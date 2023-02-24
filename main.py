from flask import Flask, render_template



app = Flask(__name__)


value = 0

@app.route('/index')
def index2():
    return render_template('index.html', title='INDEX')


@app.route('/')
def index():
    global value
    val = value
    value += 1

    return f'The page was loaded {val} times'




@app.route('/about')
def about():
    return render_template('index.html', title='ABOUT')








if __name__ == '__main__':
    app.run(debug=True)
