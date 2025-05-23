from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/tutorials')
def tutorials():
    return render_template('tutorials.html')

@app.route('/quizzes')
def quizzes():
    return render_template('quizzes.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
