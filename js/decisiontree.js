//	Contains the decision tree part of result gotten from python trainig
// 	 	freshness feature affected by current weather training result(node) from python
//		* every decision tree node gotten from training weather data in python
//		* Weights are assigned based on my personal knowledge since there's not enough data 
//				and time to train a good weight vector in a well developed algorithm.
//		* Current weather data including:
//			maxmum temp, minimum temp, rain[Y/N], snow[Y/N], wind
//		gotten from weather api will be used as input for this algorithm 

var raw_tree = '0 \n \
false \n \
TMAX \n \
3 \n \
0.0 \n \
1 \n \
1.0 \n \
62 \n \
-1.0 \n \
117 \n \
1 \n \
false \n \
MONTH \n \
3 \n \
0.0 \n \
2 \n \
1.0 \n \
20 \n \
-1.0 \n \
38 \n \
2 \n \
false \n \
WIND \n \
3 \n \
0.0 \n \
3 \n \
1.0 \n \
10 \n \
-1.0 \n \
15 \n \
3 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
4 \n \
1.0 \n \
7 \n \
4 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
5 \n \
1.0 \n \
6 \n \
5 \n \
true \n \
6 \n \
6 \n \
true \n \
7 \n \
7 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
8 \n \
1.0 \n \
9 \n \
8 \n \
true \n \
7 \n \
9 \n \
true \n \
8 \n \
10 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
11 \n \
1.0 \n \
14 \n \
11 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
12 \n \
1.0 \n \
13 \n \
12 \n \
true \n \
7 \n \
13 \n \
true \n \
8 \n \
14 \n \
true \n \
8 \n \
15 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
16 \n \
1.0 \n \
19 \n \
16 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
17 \n \
1.0 \n \
18 \n \
17 \n \
true \n \
5 \n \
18 \n \
true \n \
6 \n \
19 \n \
true \n \
6 \n \
20 \n \
false \n \
WIND \n \
3 \n \
0.0 \n \
21 \n \
1.0 \n \
26 \n \
-1.0 \n \
31 \n \
21 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
22 \n \
1.0 \n \
25 \n \
22 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
23 \n \
1.0 \n \
24 \n \
23 \n \
true \n \
7 \n \
24 \n \
true \n \
8 \n \
25 \n \
true \n \
8 \n \
26 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
27 \n \
1.0 \n \
28 \n \
27 \n \
true \n \
8 \n \
28 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
29 \n \
1.0 \n \
30 \n \
29 \n \
true \n \
8 \n \
30 \n \
true \n \
9 \n \
31 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
32 \n \
1.0 \n \
35 \n \
32 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
33 \n \
1.0 \n \
34 \n \
33 \n \
true \n \
6 \n \
34 \n \
true \n \
7 \n \
35 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
36 \n \
1.0 \n \
37 \n \
36 \n \
true \n \
7 \n \
37 \n \
true \n \
8 \n \
38 \n \
false \n \
WIND \n \
3 \n \
0.0 \n \
39 \n \
1.0 \n \
48 \n \
-1.0 \n \
57 \n \
39 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
40 \n \
1.0 \n \
45 \n \
40 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
41 \n \
1.0 \n \
44 \n \
41 \n \
false \n \
SNOW \n \
2 \n \
1.0 \n \
42 \n \
-1.0 \n \
43 \n \
42 \n \
true \n \
5 \n \
43 \n \
true \n \
3 \n \
44 \n \
true \n \
6 \n \
45 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
46 \n \
1.0 \n \
47 \n \
46 \n \
true \n \
6 \n \
47 \n \
true \n \
7 \n \
48 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
49 \n \
1.0 \n \
52 \n \
49 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
50 \n \
1.0 \n \
51 \n \
50 \n \
true \n \
6 \n \
51 \n \
true \n \
7 \n \
52 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
53 \n \
1.0 \n \
54 \n \
53 \n \
true \n \
7 \n \
54 \n \
false \n \
SNOW \n \
2 \n \
1.0 \n \
55 \n \
-1.0 \n \
56 \n \
55 \n \
true \n \
8 \n \
56 \n \
true \n \
6 \n \
57 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
58 \n \
1.0 \n \
59 \n \
58 \n \
true \n \
4 \n \
59 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
60 \n \
1.0 \n \
61 \n \
60 \n \
true \n \
5 \n \
61 \n \
true \n \
6 \n \
62 \n \
false \n \
MONTH \n \
3 \n \
0.0 \n \
63 \n \
1.0 \n \
81 \n \
-1.0 \n \
99 \n \
63 \n \
false \n \
WIND \n \
3 \n \
0.0 \n \
64 \n \
1.0 \n \
69 \n \
-1.0 \n \
74 \n \
64 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
65 \n \
1.0 \n \
68 \n \
65 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
66 \n \
1.0 \n \
67 \n \
66 \n \
true \n \
7 \n \
67 \n \
true \n \
8 \n \
68 \n \
true \n \
8 \n \
69 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
70 \n \
1.0 \n \
71 \n \
70 \n \
true \n \
8 \n \
71 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
72 \n \
1.0 \n \
73 \n \
72 \n \
true \n \
8 \n \
73 \n \
true \n \
9 \n \
74 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
75 \n \
1.0 \n \
78 \n \
75 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
76 \n \
1.0 \n \
77 \n \
76 \n \
true \n \
6 \n \
77 \n \
true \n \
7 \n \
78 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
79 \n \
1.0 \n \
80 \n \
79 \n \
true \n \
7 \n \
80 \n \
true \n \
8 \n \
81 \n \
false \n \
WIND \n \
3 \n \
0.0 \n \
82 \n \
1.0 \n \
87 \n \
-1.0 \n \
94 \n \
82 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
83 \n \
1.0 \n \
84 \n \
83 \n \
true \n \
8 \n \
84 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
85 \n \
1.0 \n \
86 \n \
85 \n \
true \n \
8 \n \
86 \n \
true \n \
9 \n \
87 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
88 \n \
1.0 \n \
91 \n \
88 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
89 \n \
1.0 \n \
90 \n \
89 \n \
true \n \
8 \n \
90 \n \
true \n \
9 \n \
91 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
92 \n \
1.0 \n \
93 \n \
92 \n \
true \n \
9 \n \
93 \n \
true \n \
10 \n \
94 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
95 \n \
1.0 \n \
98 \n \
95 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
96 \n \
1.0 \n \
97 \n \
96 \n \
true \n \
7 \n \
97 \n \
true \n \
8 \n \
98 \n \
true \n \
8 \n \
99 \n \
false \n \
WIND \n \
3 \n \
0.0 \n \
100 \n \
1.0 \n \
107 \n \
-1.0 \n \
110 \n \
100 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
101 \n \
1.0 \n \
104 \n \
101 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
102 \n \
1.0 \n \
103 \n \
102 \n \
true \n \
6 \n \
103 \n \
true \n \
7 \n \
104 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
105 \n \
1.0 \n \
106 \n \
105 \n \
true \n \
7 \n \
106 \n \
true \n \
8 \n \
107 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
108 \n \
1.0 \n \
109 \n \
108 \n \
true \n \
7 \n \
109 \n \
true \n \
8 \n \
110 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
111 \n \
1.0 \n \
114 \n \
111 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
112 \n \
1.0 \n \
113 \n \
112 \n \
true \n \
5 \n \
113 \n \
true \n \
6 \n \
114 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
115 \n \
1.0 \n \
116 \n \
115 \n \
true \n \
6 \n \
116 \n \
true \n \
7 \n \
117 \n \
false \n \
TMIN \n \
2 \n \
0.0 \n \
118 \n \
-1.0 \n \
155 \n \
118 \n \
false \n \
WIND \n \
3 \n \
0.0 \n \
119 \n \
1.0 \n \
131 \n \
-1.0 \n \
142 \n \
119 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
120 \n \
1.0 \n \
125 \n \
120 \n \
false \n \
MONTH \n \
2 \n \
0.0 \n \
121 \n \
-1.0 \n \
122 \n \
121 \n \
true \n \
5 \n \
122 \n \
false \n \
SNOW \n \
2 \n \
1.0 \n \
123 \n \
-1.0 \n \
124 \n \
123 \n \
true \n \
4 \n \
124 \n \
true \n \
3 \n \
125 \n \
false \n \
SNOW \n \
2 \n \
1.0 \n \
126 \n \
-1.0 \n \
130 \n \
126 \n \
false \n \
MONTH \n \
3 \n \
0.0 \n \
127 \n \
1.0 \n \
128 \n \
-1.0 \n \
129 \n \
127 \n \
true \n \
6 \n \
128 \n \
true \n \
7 \n \
129 \n \
true \n \
5 \n \
130 \n \
true \n \
3 \n \
131 \n \
false \n \
SNOW \n \
2 \n \
1.0 \n \
132 \n \
-1.0 \n \
137 \n \
132 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
133 \n \
1.0 \n \
136 \n \
133 \n \
false \n \
MONTH \n \
2 \n \
0.0 \n \
134 \n \
-1.0 \n \
135 \n \
134 \n \
true \n \
6 \n \
135 \n \
true \n \
5 \n \
136 \n \
true \n \
6 \n \
137 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
138 \n \
1.0 \n \
139 \n \
138 \n \
true \n \
3 \n \
139 \n \
false \n \
MONTH \n \
2 \n \
0.0 \n \
140 \n \
-1.0 \n \
141 \n \
140 \n \
true \n \
5 \n \
141 \n \
true \n \
4 \n \
142 \n \
false \n \
MONTH \n \
2 \n \
0.0 \n \
143 \n \
-1.0 \n \
148 \n \
143 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
144 \n \
1.0 \n \
145 \n \
144 \n \
true \n \
4 \n \
145 \n \
false \n \
SNOW \n \
2 \n \
1.0 \n \
146 \n \
-1.0 \n \
147 \n \
146 \n \
true \n \
5 \n \
147 \n \
true \n \
3 \n \
148 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
149 \n \
1.0 \n \
152 \n \
149 \n \
false \n \
SNOW \n \
2 \n \
1.0 \n \
150 \n \
-1.0 \n \
151 \n \
150 \n \
true \n \
3 \n \
151 \n \
true \n \
2 \n \
152 \n \
false \n \
SNOW \n \
2 \n \
1.0 \n \
153 \n \
-1.0 \n \
154 \n \
153 \n \
true \n \
4 \n \
154 \n \
true \n \
3 \n \
155 \n \
false \n \
WIND \n \
3 \n \
0.0 \n \
156 \n \
1.0 \n \
167 \n \
-1.0 \n \
174 \n \
156 \n \
false \n \
SNOW \n \
2 \n \
1.0 \n \
157 \n \
-1.0 \n \
162 \n \
157 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
158 \n \
1.0 \n \
161 \n \
158 \n \
false \n \
MONTH \n \
2 \n \
0.0 \n \
159 \n \
-1.0 \n \
160 \n \
159 \n \
true \n \
4 \n \
160 \n \
true \n \
3 \n \
161 \n \
true \n \
4 \n \
162 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
163 \n \
1.0 \n \
166 \n \
163 \n \
false \n \
MONTH \n \
2 \n \
0.0 \n \
164 \n \
-1.0 \n \
165 \n \
164 \n \
true \n \
3 \n \
165 \n \
true \n \
2 \n \
166 \n \
true \n \
3 \n \
167 \n \
false \n \
SNOW \n \
2 \n \
1.0 \n \
168 \n \
-1.0 \n \
173 \n \
168 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
169 \n \
1.0 \n \
172 \n \
169 \n \
false \n \
MONTH \n \
2 \n \
0.0 \n \
170 \n \
-1.0 \n \
171 \n \
170 \n \
true \n \
5 \n \
171 \n \
true \n \
4 \n \
172 \n \
true \n \
5 \n \
173 \n \
true \n \
3 \n \
174 \n \
false \n \
SNOW \n \
2 \n \
1.0 \n \
175 \n \
-1.0 \n \
176 \n \
175 \n \
true \n \
3 \n \
176 \n \
false \n \
RAIN \n \
2 \n \
0.0 \n \
177 \n \
1.0 \n \
178 \n \
177 \n \
true \n \
1 \n \
178 \n \
false \n \
MONTH \n \
2 \n \
0.0 \n \
179 \n \
-1.0 \n \
180 \n \
179 \n \
true \n \
3 \n \
180 \n \
true \n \
2';


var tree_nodes = {};

function predict(input_dictionary_of_attributes) {
	var current_node = tree_nodes[0];
	while(true) {
		if(current_node["has_decision"] == true) {
			return current_node["decision"];
		}
		var split_attribute = current_node["attribute"];
		var value = input_dictionary_of_attributes[split_attribute];
		
		if (value in current_node["children"]) {
			current_node = tree_nodes[current_node["children"][value]];
		}
	}
}


function loadDecisionTree() {
	var lines = raw_tree.split("\n");
	var lines_index = 0;

	while (lines_index < lines.length) {
		var node = {};
		var node_index = lines[lines_index++].trim();
		var node_has_decision = lines[lines_index++].trim();
		if (node_has_decision === "true") {
			var decision = lines[lines_index++].trim();
			node["has_decision"] = true;
			node["decision"] = decision;
		} else {
			node["has_decision"] = false;
			var attribute = lines[lines_index++].trim();
			node["attribute"] = attribute;

			var children = {};
			var number_of_children = parseInt(lines[lines_index++].trim());

			for (var i = 0; i < number_of_children; i++) {
				var child_attribute_value = parseInt(lines[lines_index++].trim());
				var child_node_index = lines[lines_index++].trim();
				children[child_attribute_value] = child_node_index;
			}
			node['children'] = children;
		}
		tree_nodes[node_index] = node;
	}
}

//var test = {"MONTH":1, "RAIN":1, "SNOW":1, "TMAX":-1, "TMIN":-1, "WIND":0}

//predict_test = predict(test);

//console.log(predict_test)


// for weather data the feature functions are

// RAIN = 
//	+1 if Y
//	 0 if N

// TMAX (in tenth of C) = 
//	-1 if        x < 50
//	 0 if  50 <= x < 150
//	+1 if 150 <= x < 300
//	 0 if 		 x >= 300

// TMIN (in tenth of C) = 
// 	-1 if       x < -100
//	 0 if -100 <= x < 50
//	+1 if   50 <= x < 200
// 	 0 if 		  x >= 200

// WIND (km) = 
// 	+1 if       x < 25
//	 0 if 25 <= x < 50
//	-1 if       x >= 50

// SNOW = 
//	-1 if Y
//	+1 if N

// MONTH = 
//	-1 if x = 1, 2, 11, 12
//	 0 if x = 3, 7, 8
//	+1 if x = 4, 5, 6, 9, 10
