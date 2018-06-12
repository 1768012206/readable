from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField,BooleanField
from wtforms.validators import DataRequired


class BookForm(FlaskForm):
    startdate = StringField('startdate', validators=[DataRequired()])
    enddate = StringField('enddate', validators=[DataRequired()])
    username = StringField('username', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])
    select = SelectField('state')
    submit = SubmitField('Submit')


class LoginForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])

    submit = SubmitField('Submit')
