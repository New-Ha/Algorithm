function solution(order) {
    return order.reduce((acc, cur) => cur.includes("americano") ? acc + 4500 : cur.includes("cafelatte") ? acc + 5000 : acc + 4500, 0 )
}