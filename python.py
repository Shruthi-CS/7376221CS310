from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/calculate', methods=['POST'])
def calculate_average():
    data = request.get_json()
    numbers = data.get("numbers", [])

    if not numbers:
        return jsonify({"error": "No numbers provided"}), 400

    avg = sum(numbers) / len(numbers)
    return jsonify({"average": avg})

if __name__ == '__main__':
    app.run(debug=True)
