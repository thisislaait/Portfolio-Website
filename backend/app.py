from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from React

@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = [
        {"title": "Portfolio Project", "description": "Showcase project built with React and Flask", "tech_stack": ["React", "Flask", "Python"]},
        {"title": "E-commerce Store", "description": "A basic e-commerce store with cart functionality", "tech_stack": ["React", "Node", "Express"]}
    ]
    return jsonify(projects)

if __name__ == "__main__":
    app.run(debug=True)
