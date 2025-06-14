from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/tutorials')
def tutorials():
    return render_template('tutorials.html')



@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/ask')
def ask():
    return render_template('ask.html')

if __name__ == '__main__':
    app.run(debug=True)
