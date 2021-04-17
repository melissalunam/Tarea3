from flask import Flask, render_template      

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("main.html")

@app.route("/pagoconfirmado")
def pagoconfirmado():
    return render_template("pago_confirmado.html")
    
if __name__ == "__main__":
    app.run(debug=True)
