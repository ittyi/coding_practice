import numpy as np
from scipy.sparse.csgraph import shortest_path, floyd_warshall, dijkstra, bellman_ford, johnson
from scipy.sparse import csr_matrix
from collections import deque


# 入力
h,w,k = map(int, input().split())
print(h, w, k)

graph = [[] for _ in range(h)]
print(graph)

for i in range(h):
    input_line = input()
    index = len(input_line)
    for j in range(index):
        if input_line[j] == '#':
            graph[i].append(0)
        elif input_line[j] == 'N':
            graph[i].append(k+1)
        else :
            graph[i].append(int(input_line[j]))

print(graph)

# prev = [-1] * h
# def bfs(v):
#     q = deque()
#     prev[v] = -99999
#     q.append(v)
#     while q:
#         v = q.popleft()
#         for u in graph[v]:
#             if prev[u] == -1:
#                 prev[u] = v
#                 q.append(u)

# bfs(0)
# print("Yes")
# for i in range(1, h):
#     print(prev[i] + 1)


# input_line = []
# for i in range(h):
#     input_line.append(input())
# print(input_line)

# まず、＃を0に、NをK＋1に置き換えて、グラフを作る。
# Nを始点として、1～Kまでの

# わからん！！！出直しじゃ。