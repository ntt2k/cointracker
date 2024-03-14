from fastapi.logger import logger


def filter_response_data(res):
    data = res.get("data")

    context = res.get("context")
    price_usd = context.get("market_price_usd")

    if isinstance(data, dict):
        wallet, value = next(iter(data.items()))
        ans = {
            "data": {
                wallet: {
                    "address": value["address"],
                    "transactions": add_balance_usd_to_transactions(
                        value["transactions"], price_usd
                    ),
                }
            },
            "context": context,
        }

    return ans


def convert_satoshi_usd(satoshi: int, price: float) -> float:
    return satoshi * price / 100000000


def add_balance_usd_to_transactions(transactions: list, price: float) -> list:
    for tx in transactions:
        tx["balance_change_usd"] = convert_satoshi_usd(tx["balance_change"], price)
    return transactions
