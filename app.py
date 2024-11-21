from flask import Flask, request, render_template
from model import predict_rating  # Import the predict_rating function from your model module

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    user_country = request.form['country']
    user_duration = request.form['duration']
    user_listedin = request.form['listedin']

    # Validate that duration is greater than 0
    if float(user_duration) <= 0:
        error_message = "Duration must be greater than 0."
        return render_template('index.html', error_message=error_message)

    predicted_rating = predict_rating(user_country, user_duration, user_listedin)
    return render_template('result.html', predicted_rating=predicted_rating)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
