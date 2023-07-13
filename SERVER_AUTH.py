pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib

# Required imports from google API
from google.oauth2 import id_token
from google.auth.transport import requests

@bp.route('/login', methods=['POST'])
def login():

    # Supplied by g_id_onload
    tokenid = request.form['credential']

    # Hardcoded client ID. Substitute yours.
    clientid = "314297944264-6oa2s36dno21vmjohh3ecjhhbpp0m71c.apps.googleusercontent.com"

    # Display the encrypted credential
    current_app.logger.debug(f"Token = {tokenid}")
   
    try:
        idinfo = id_token.verify_oauth2_token(tokenid, 
                requests.Request(), clientid)

        # Display the verified user information
        current_app.logger.debug(f"idinfo = {idinfo}")
    
        # jsonify returns a response object
        user_data = jsonify({
                'username': idinfo['email'],
                'name': idinfo['name'],
                'id': idinfo['sub']
            })
        return  user_data

    except:
        return Response(status=404)