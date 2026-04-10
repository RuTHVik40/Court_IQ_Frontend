def s():
    n=int(input())
    p=list(map(int,input().split()))
    d=list(map(int,input().split()))
    ipv=[0]*(n+1)
    for i in range(n):
        ipv[p[i]]=i
    for i in range(n):
        pd=0
        for j in range(i+1,n):
            if p[j]>p[i]:
                pd+=1
        if d[i]>pd:
            print("-1")
            return
    r=[]
    for v in range(n, 0, -1):
        cid=ipv[v]
        td=d[cid]
        cr=0
        ip=len(r)
        for i in range(len(r)-1,-1,-1):
            if cr==td:
                break
            if r[i]>cid:
                cr+=1
            ip = i
        if cr<td:
            print("-1")
            return
        r.insert(ip,cid)
    q=[0]*n
    for i in range(n):
        q[r[i]]=i+1
    print(*(q))
for _ in range(int(input())):
    s()