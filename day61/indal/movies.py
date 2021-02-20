class Movie:
    def __init__(self,name,hero,heroine,rating):
        self.name=name
        self.hero=hero
        self.heroine=heroine
        self.rating=rating
    
    def info(self):
        print(self.name)
        print(self.hero)
        print(self.heroine)
        print(self.rating)


movie_list=[
    Movie("Bahubali","Prabhas","Anushka",5),
    Movie("Avengers","Iron Man","Sccarlet",5),
    Movie("Indal","Prabhas","Anushka",5),
    Movie("Bahubali","Prabhas","Anushka",5),
]

for movie in movie_list:
    movie.info()

# without construcor
# m=Movie()
# m.name="Indal kumar"
# m.hero="Indal kumar"
# m.heroine="Deepika Padukone"
# m.rating=100

# m.info()