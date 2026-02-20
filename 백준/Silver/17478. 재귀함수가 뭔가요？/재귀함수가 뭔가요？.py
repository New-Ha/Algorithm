N = int(input())

OPENING = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다."
QUESTION = '"재귀함수가 뭔가요?"'
STORY = [
    '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.',
    '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.',
    '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."'
]
BASE_ANSWER = '"재귀함수는 자기 자신을 호출하는 함수라네"'
CLOSING = '라고 답변하였지.'


def recursive(depth, indent, answer):
    answer.append(indent + QUESTION)

    if depth == 0:
        answer.append(indent + BASE_ANSWER)
        answer.append(indent + CLOSING)
        return

    for line in STORY:
        answer.append(indent + line)

    recursive(depth - 1, indent + '____', answer)
    answer.append(indent + CLOSING)


answer = [OPENING]
recursive(N, '', answer)

print('\n'.join(answer))