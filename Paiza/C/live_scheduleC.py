def liveSwitch(next):
	if next == 'A': return 'B'
	else : return 'A'

schedule_a = []
schedule_b = []

A_n = int(input())
for i in range(A_n):
    schedule_a.append(input())

B_n = int(input())
for i in range(B_n):
    schedule_b.append(input())


calender = ['x'] * 31
next_live = 'A'
index_a = 0
index_b = 0

for i in range(len(calender)):
	if len(schedule_a) == index_a: index_a = 0
	if len(schedule_b) == index_b: index_b = 0
	
	if str(i+1) == schedule_a[index_a] and str(i+1) == schedule_b[index_b]:
		calender[i] = next_live
		next_live = liveSwitch(next_live)
		index_a += 1
		index_b += 1
	elif str(i+1) == schedule_a[index_a]:
		calender[i] = 'A'
		index_a += 1
	elif str(i+1) == schedule_b[index_b]:
		calender[i] = 'B'
		index_b += 1

for i in range(len(calender)):
    print(calender[i])

