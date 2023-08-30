def solution(myStr):
    #ver 1
    #removedA = myStr.split('a')
    #removedB = sum([x.split('b') for x in removedA if x ], [])
    #removedC = sum([x.split('c') for x in removedB if x ], [])
    #return [x for x in removedC if x] if len([x for x in removedC if x]) else ["EMPTY"]
    
    #ver 2
    remove = ['a', 'b', 'c']
    removed = ''.join(list(map(lambda el : '/' if el in remove else el, list(myStr)))).split('/')
    return [x for x in removed if x] if len([x for x in removed if x]) else ["EMPTY"]