from flask import Flask
from routes.test import test_blueprint  # Import your blueprints

def create_app():
    # Initialize the Flask application
    app = Flask(__name__)

    # Set configuration (optional: can be moved to config.py for better structure)
    app.config['SECRET_KEY'] = 'mysecretkey'

    # Register Blueprints (modular route handling)
    app.register_blueprint(test_blueprint)

    return app

# If this script is run directly, it will start the Flask application
if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
