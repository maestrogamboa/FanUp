# app/routes/home.py
from flask import Blueprint, render_template

# Create a blueprint for the home route
test_blueprint = Blueprint('test', __name__)

# Define the route for home page
@test_blueprint.route('/')
def test():
    return render_template('test.html')  # This is assuming you have a home.html template
