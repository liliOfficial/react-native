import React, { Component } from 'react';
import { Text, View, WebView } from 'react-native';

export default class VGSCollect extends Component {
    render() {
        return (
            <WebView
                source={{
                    html: VGSCollectFormHTMl,
                }}
            />
        );
    }
}

const VGSCollectFormHTMl = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>VGS Collect Credit Card Example</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!--Replace with generated for your organization JS file.-->
    <script type="text/javascript" src="https://js.verygoodvault.com/vgs-collect/1/vgs-collect-examples.js"></script>

    <style>

      span[id*="cc-"] {
        display: block;
        height: 40px;
        margin-bottom: 15px;
      }

      span[id*="cc-"] iframe {
        height: 100%;
        width: 100%;
      }

      pre {
        font-size: 12px;
      }

      .form-field {
        display: block;
        width: 100%;
        height: calc(2.25rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      }

      .form-field iframe {
        border: 0 none transparent;
        height: 100%;
        vertical-align: middle;
        width: 100%;
      }

      p {
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
  <main>
            <form id="cc-form">
              <div class="form-group">
                <label for="cc-name">Name</label>
                <span id="cc-name" class="form-field">
                  <!--VGS Collect iframe for card name field will be here!-->
                </span>
              </div>
              <div class="form-group">
                <label for="cc-number">Card number</label>
                <span id="cc-number" class="form-field">
                  <!--VGS Collect iframe for card number field will be here!-->
                </span>
              </div>
              <div class="form-group">
                <label for="cc-cvc">CVC</label>
                <span id="cc-cvc" class="form-field">
                <!--VGS Collect iframe for CVC field will be here!-->
                </span>
              </div>
              <div class="form-group">
                <label for="cc-expiration-date">Expiration date</label>
                <span id="cc-expiration-date" class="form-field">
                <!--VGS Collect iframe for expiration date field will be here!-->
                </span>
              </div>

              <!--Submit credit card form button-->
              <button type="submit" class="btn btn-success btn-block">Submit</button>
            </form>

    </div>
  </main>

  <!--Include script with VGS Collect form initialization-->
  <script>
    // VGS Collect form initialization
    const form = VGSCollect.create('tntq4dwvhri', function(state) {});

    // Create VGS Collect field for credit card name
    form.field('#cc-name', {
      type: 'text',
      name: 'card_name',
      placeholder: 'Joe Business',
      validations: ['required'],
    });

    // Create VGS Collect field for credit card number
    form.field('#cc-number', {
      type: 'card-number',
      name: 'card_number',
      successColor: '#4F8A10',
      errorColor: '#D8000C',
      placeholder: '4111 1111 1111 1111',
      validations: ['required', 'validCardNumber'],
    });

    // Create VGS Collect field for CVC
    form.field('#cc-cvc', {
      type: 'card-security-code',
      name: 'card_cvc',
      placeholder: '344',
      validations: ['required', 'validCardSecurityCode'],
    });

    // Create VGS Collect field for credit card expiration date
    form.field('#cc-expiration-date', {
      type: 'card-expiration-date',
      name: 'card_exp',
      placeholder: '01 / 2016',
      validations: ['required', 'validCardExpirationDate']
    });

    // Submits all of the form fields by executing a POST request.
    document.getElementById('cc-form')
      .addEventListener('submit', function(e) {
        e.preventDefault();
        form.submit('/post', {
        }, function(status, data) {
          document.getElementById('result').innerHTML = JSON.stringify(data.json, null, 4);
        });
      }, function (errors) {
        document.getElementById('result').innerHTML = errors;
      });
  </script>
  </body>
  </html>`;
