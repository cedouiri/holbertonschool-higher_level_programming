#!/usr/bin/python3
if __name__ == "__main__":
    import sys

    import calculator_1

    if len(sys.argv) != 4:
        print("Usage: ./100-my_calculator.py <a> <operator> <b>")
        exit(1)

    _calc = calculator_1
    _func = {'+': _calc.add, '-': _calc.sub, '/': _calc.div, '*': _calc.mul}
    a = sys.argv[1]
    k = sys.argv[2]
    b = sys.argv[3]

    if k in '-+/*':
        print("{} {} {} = {}".format(a, k, b, _func[k](int(a), int(b))))
    else:
        print("Unknown operator. Available operators: +, -, * and /")
        exit(1)
