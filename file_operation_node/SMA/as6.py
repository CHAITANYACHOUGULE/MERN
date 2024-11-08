import pandas as pd
import networkx as nx
df=pd.read_csv("pseudo_facebook.csv")
df. head( )
# Load edge list
#age and dob_year is my attribute ,you please add your dataset attributes
fb_graph=nx.from_pandas_edgelist(df,source="age", target="dob_year")
type(fb_graph)
#display all the nodes
fb_graph.nodes()
#display all the edges
fb_graph.edges()
#add new node in graph
fb_graph.add_edge("123","2154")
fb_graph.nodes()
import matplotlib.pyplot as plt
matplotlib inline
#G = nx.Graph()
#G = nx.path_graph(4, create_using=nx.DiGraph)
G= nx.Graph(fb_graph)
#nx.graph
import matplotlib.pyplot as plt

#display the facebook friends network
nx.draw(fb_graph,with_labels=True)
nx.has
#degree of each node
nx.degree(fb_graph)
nx.degree(fb_graph,1999)
#degree centrality
nx.degree_centrality(fb_graph)
sorted(nx.degree_centrality(fb_graph).values())
m_influential=nx.degree_centrality(G)
for w in sorted(m_influential,key=m_influential.get,reverse=True):
print(w,m_influential[w])
pos=nx.spring_layout(G)
betCent=nx.betweenness_centrality(G,normalized=True,endpoints=True)
node_color=[20000.0*G.degree(v)for v in G]
node_size=[v*10000 for v in betCent.values()]
plt.figure(figsize=(20,20))
nx.draw_networkx(G,pos=pos,with_labels=False,node_color=node_color,node_size=node_size)
sorted(betCent,key=betCent.get,reverse=True)[:5]
#closeness centrality
closeness_centrality=nx.centrality.closeness_centrality(G)
(sorted(closeness_centrality.items(),key=lambda item:item[1],reverse=True))[:8]
node_size=[v*50 for v in closeness_centrality.values()]
plt.figure(figsize=(15,8))
nx.draw_networkx(G,pos=pos,node_size=node_size,with_labels=False,width=0.15)
plt.axis("off")
#bridges
nx.has_bridges(G)
bridges=list(nx.bridges(G))
len(bridges)
local_bridges=list(nx.local_bridges(G,with_span=False))
len(bridges)
plt.figure(figsize=(15,5))
nx.draw_networkx(G,pos=pos,node_size=10,with_labels=False,width=0.15)
nx.draw_networkx_edges(G,pos,edgelist=local_bridges,width=0.5,edge_color="green")
nx.draw_networkx_edges(G,pos,edgelist=local_bridges,width=0.5,edge_color="blue")
plt.axis("off")
#clustering
nx.average_clustering(G)