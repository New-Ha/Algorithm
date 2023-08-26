def solution(age):
    translate = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    age962 = '';
    for i in list(str(age)):
        age962 += translate[int(i)]
    return age962