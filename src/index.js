module.exports = function toReadable (number) {
    let strNumber = String(number)
    let result = ''

    if (strNumber.length === 3) {
        switch (strNumber[0]) {
            case '9':
                result += "nine "
                break
            case '8':
                result += "eight "
                break
            case '7':
                result += "seven "
                break
            case '6':
                result += "six "
                break
            case '5':
                result += "five "
                break
            case '4':
                result += "four "
                break
            case '3':
                result += "three "
                break
            case '2':
                result += "two "
                break
            case '1':
                result += 'one '
                break
            default:
                break;
        }

        result += 'hundred'

        switch (strNumber[1]) {
            case '9':
                result += " ninety"
                break
            case '8':
                result += " eighty"
                break
            case '7':
                result += " seventy"
                break
            case '6':
                result += " sixty"
                break
            case '5':
                result += " fifty"
                break
            case '4':
                result += " forty"
                break
            case '3':
                result += " thirty"
                break
            case '2':
                result += " twenty"
                break
            case '1': {
                switch (strNumber[2]) {
                    case '0':
                        result += ' ten';
                        break;
                    case '1':
                        result += ' eleven';
                        break;
                    case '2':
                        result += ' twelve';
                        break;
                    case '3':
                        result += ' thirteen';
                        break;
                    case '4':
                        result += ' fourteen';
                        break;
                    case '5':
                        result += ' fifteen';
                        break;
                    case '6':
                        result += ' sixteen';
                        break;
                    case '7':
                        result += ' seventeen';
                        break;
                    case '8':
                        result += ' eighteen';
                        break;
                    case '9':
                        result += ' nineteen';
                        break;
                    default:
                        break;
                }
                break;
            }
            default:
                break;
        }

        if (strNumber[1] != 1) {
            switch (strNumber[2]) {
                case '9':
                    result += " nine"
                    break
                case '8':
                    result += " eight"
                    break
                case '7':
                    result += " seven"
                    break
                case '6':
                    result += " six"
                    break
                case '5':
                    result += " five"
                    break
                case '4':
                    result += " four"
                    break
                case '3':
                    result += " three"
                    break
                case '2':
                    result += " two"
                    break
                case '1':
                    result += ' one'
                    break
                default:
                    break;
            }
        }
    }

    if (strNumber.length === 2) {
        switch (strNumber[0]) {
            case '9':
                result += "ninety"
                break
            case '8':
                result += "eighty"
                break
            case '7':
                result += "seventy"
                break
            case '6':
                result += "sixty"
                break
            case '5':
                result += "fifty"
                break
            case '4':
                result += "forty"
                break
            case '3':
                result += "thirty"
                break
            case '2':
                result += "twenty"
                break
            case '1': {
                switch (strNumber[1]) {
                    case '0':
                        result += 'ten';
                        break;
                    case '1':
                        result += 'eleven';
                        break;
                    case '2':
                        result += 'twelve';
                        break;
                    case '3':
                        result += 'thirteen';
                        break;
                    case '4':
                        result += 'fourteen';
                        break;
                    case '5':
                        result += 'fifteen';
                        break;
                    case '6':
                        result += 'sixteen';
                        break;
                    case '7':
                        result += 'seventeen';
                        break;
                    case '8':
                        result += 'eighteen';
                        break;
                    case '9':
                        result += 'nineteen';
                        break;
                    default:
                        break;
                }
                break;
            }
            default:
                break;
        }

        if (strNumber[0] != 1) {
            switch (strNumber[1]) {
                case '9':
                    result += " nine"
                    break
                case '8':
                    result += " eight"
                    break
                case '7':
                    result += " seven"
                    break
                case '6':
                    result += " six"
                    break
                case '5':
                    result += " five"
                    break
                case '4':
                    result += " four"
                    break
                case '3':
                    result += " three"
                    break
                case '2':
                    result += " two"
                    break
                case '1':
                    result += ' one'
                    break
                default:
                    break;
            }
        }
    }


    if (strNumber.length === 1) {
        switch (strNumber[0]) {
            case '9':
                result += "nine"
                break
            case '8':
                result += "eight"
                break
            case '7':
                result += "seven"
                break
            case '6':
                result += "six"
                break
            case '5':
                result += "five"
                break
            case '4':
                result += "four"
                break
            case '3':
                result += "three"
                break
            case '2':
                result += "two"
                break
            case '1':
                result += 'one'
                break
            case '0':
                result += 'zero'
                break
            default:
                break;
        }
    }

    return result;
}
