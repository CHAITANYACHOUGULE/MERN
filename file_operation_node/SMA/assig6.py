import pandas as pd
import networkx as nx
import matplotlib.pyplot as plt

# Load dataset
df = pd.read_csv("psudeo_facebook.csv")
df.head()


# Load edge list - using 'age' and 'dob_year' as attributes
fb_graph = nx.from_pandas_edgelist(df, source="age", target="dob_year")
type(fb_graph)


# Display all the nodes
fb_graph.nodes()

# Display all the edges
fb_graph.edges()

# Add a new edge in the graph
fb_graph.add_edge("123", "2154")
fb_graph.nodes()

# Display the Facebook friends network
 # Show the plot
plt.show()
nx.draw(fb_graph, with_labels=True)

# Degree of each node
nx.degree(fb_graph)
nx.degree(fb_graph, 1998)

# Degree centrality
nx.degree_centrality(fb_graph)
sorted(nx.degree_centrality(fb_graph).values())

# Most influential nodes based on degree centrality
m_influential = nx.degree_centrality(fb_graph)
for w in sorted(m_influential, key=m_influential.get, reverse=True):
    print(w, m_influential[w])
    
# Layout for visualizing the graph
pos = nx.spring_layout(fb_graph)

# Betweenness centrality
betCent = nx.betweenness_centrality(fb_graph, normalized=True, endpoints=True)

# Node color and size based on betweenness centrality
node_color = [20000.0 * fb_graph.degree(v) for v in fb_graph]
node_size = [v * 10000 for v in betCent.values()]

# Plot the graph with betweenness centrality
plt.figure(figsize=(20, 20))
nx.draw_networkx(fb_graph, pos=pos, with_labels=False, node_color=node_color, node_size=node_size)

# Display top 5 nodes by betweenness centrality
sorted(betCent, key=betCent.get, reverse=True)[:5]

# Closeness centrality
closeness_centrality = nx.centrality.closeness_centrality(fb_graph)
sorted(closeness_centrality.items(), key=lambda item: item[1], reverse=True)[:8]

