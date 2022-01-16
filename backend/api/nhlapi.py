import requests


def requestNHLAPI(endpoint, **kwargs):
    URL = "https://statsapi.web.nhl.com/api/v1/" + endpoint
    response = requests.get(URL, **kwargs)
    if response.status_code >= 200 and response.status_code < 300:
        return response.json()
    else:
        print(response)
        raise Exception("error requesting api")

def getTeams():
    return requestNHLAPI("teams")
