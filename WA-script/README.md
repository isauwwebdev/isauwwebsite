# WhatsApp Message Automation Script

This Jupyter Notebook is designed to automate the process of sending WhatsApp messages to a list of participants using the `pywhatkit` library. It reads a list of names and phone numbers from a CSV file and sends customized messages to each participant.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Dependencies](#dependencies)

## Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>

    make sure to have installed all packages
    %pip install pandas
    %pip install pywhatkit
    ```

2. **Install required packages**:
    Make sure you have Python 3.x installed. Then, install the required packages using pip:
    ```bash
    pip install pywhatkit pandas
    ```

3. **Ensure your system meets the prerequisites**:
    - **Google Chrome** should be installed and updated to the latest version.
    - **WhatsApp Web** should be active on your browser.

## Usage

1. **Prepare the CSV File**:
    - The CSV file should include two columns: `Full Name` and `Phone number (for Whatsapp)`.
    - Place the CSV file in the same directory as this notebook and name it `bingo-tour.csv`.

2. **Run the Notebook**:
    - Open the notebook and run all cells sequentially.
    - The script will automatically read the CSV file, format the phone numbers, and send messages to each participant.

3. **Customization**:
    - You can customize the message content within the notebook in the `message` variable.

## File Structure

- `whatsapp-message.ipynb`: The Jupyter Notebook that contains the script for sending WhatsApp messages.
- `bingo-tour.csv`: The CSV file containing participant details (not included in the repository).

## Customization

- **Message Content**:
    - The message sent to each participant is defined in the notebook. You can modify the text as needed within the `message` variable.

## Troubleshooting

- **AttributeError**: If you encounter an `AttributeError` related to phone number formatting, ensure that all phone numbers in the CSV file are correctly formatted as strings.
- **Message Sending Issues**: Ensure that WhatsApp Web is open and logged in on your browser when running the notebook. The `pywhatkit` library relies on WhatsApp Web to send messages.

## Dependencies

- **Python 3.x**
- **pywhatkit**: A library for sending WhatsApp messages programmatically.
- **pandas**: A library for data manipulation and analysis.
