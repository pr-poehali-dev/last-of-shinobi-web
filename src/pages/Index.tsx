import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [cartItems, setCartItems] = useState<Array<{id: string, name: string, price: number, quantity: number}>>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: {name: string, price: number}) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.name === item.name 
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, {
        id: Date.now().toString(),
        name: item.name,
        price: item.price,
        quantity: 1
      }]);
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? {...item, quantity} : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  const mrCharacters = [
    {
      name: "Наруто MR",
      prices: { "50★": 6000, "70★": 8000, "100★": 12000 },
      image: "/img/a11571d3-2f27-48b0-a785-eb2e439a5d5a.jpg"
    },
    {
      name: "Итачи MR", 
      prices: { "50★": 8000, "70★": 10000, "100★": 15000 },
      image: "/img/a11571d3-2f27-48b0-a785-eb2e439a5d5a.jpg"
    },
    {
      name: "Минато MR",
      prices: { "50★": 6000, "70★": 8000, "100★": 12000 },
      image: "/img/a11571d3-2f27-48b0-a785-eb2e439a5d5a.jpg"
    }
  ];

  const specialCharacters = [
    {
      name: "Пейн",
      prices: { "50★": 4000, "70★": 6000, "100★": 8000 },
      image: "/img/a11571d3-2f27-48b0-a785-eb2e439a5d5a.jpg"
    },
    {
      name: "Мадара Домино",
      prices: { "50★": 4000, "70★": "недоступен", "100★": "недоступен" },
      image: "/img/a11571d3-2f27-48b0-a785-eb2e439a5d5a.jpg"
    }
  ];

  const eliteCharacters = {
    name: "Элитные персонажи UR/SP",
    prices: { "50★": 3000, "70★": 5000, "100★": 8000 }
  };

  const copies = [
    { name: "Наруто MR", price: 250, count: "5 копий" },
    { name: "Итачи MR", price: 400, count: "5 копий" },
    { name: "Пейн", price: 150, count: "5 копий" },
    { name: "Мадара Домино", price: 150, count: "5 копий", unavailable: true },
    { name: "Индра", price: 100, count: "5 копий" },
    { name: "Асура", price: 100, count: "5 копий" }
  ];

  const resources = [
    { name: "Корм 9/10★ (10 шт.)", price: 100 },
    { name: "Чинтамани (5000 шт.)", price: 500 },
    { name: "Гемы Кагуи (5000 шт.)", price: 350 },
    { name: "Золото (4,2B)", price: 850 },
    { name: "Мешки опыта (200 000 шт.)", price: 100 },
    { name: "UR паки (100 шт.)", price: 200 },
    { name: "SP паки (100 шт.)", price: 100 },
    { name: "Coins (1млн)", price: 1000 },
    { name: "V255 VIP", price: 2000 },
    { name: "Склянки Эссенции (200 млн)", price: 500 },
    { name: "Навыки гильдии", price: 1500 },
    { name: "Элементальный камень MR (100шт)", price: 400 }
  ];

  const equipment = [
    { name: "Твари 5★", price: 150 },
    { name: "Книга +15", price: 500 },
    { name: "Книга +20", price: 1000 },
    { name: "Комплект C-Снаряжения 999★", price: 2000 },
    { name: "Сет 'Индра'", price: 2000 },
    { name: "Сет 'T50'", price: 8000 }
  ];

  const personalization = [
    { name: "Случайный титул", price: 150 },
    { name: "Скин для персонажа", price: 250 },
    { name: "Рамка на выбор", price: 100 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-naruto-darkBlue via-naruto-dark to-black text-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-naruto-orange/20 to-naruto-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-naruto-orange to-naruto-gold bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              LAST OF SHINOBI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Магазин игровых товаров по мотивам аниме Наруто
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                <SheetTrigger asChild>
                  <Button size="lg" className="bg-naruto-orange hover:bg-naruto-orange/80 text-white px-8 py-4 text-lg font-semibold relative">
                    <Icon name="ShoppingCart" className="mr-2" />
                    Корзина
                    {cartItems.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-naruto-red text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        {cartItems.reduce((total, item) => total + item.quantity, 0)}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-naruto-dark border-naruto-blue/30 text-white w-[400px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle className="text-naruto-orange flex items-center">
                      <Icon name="ShoppingCart" className="mr-2" />
                      Корзина покупок
                    </SheetTitle>
                    <SheetDescription className="text-gray-300">
                      {cartItems.length === 0 ? 'Ваша корзина пуста' : `Товаров в корзине: ${cartItems.length}`}
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="mt-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                    {cartItems.length === 0 ? (
                      <div className="text-center py-8">
                        <Icon name="ShoppingCart" className="mx-auto mb-4 text-gray-500" size={48} />
                        <p className="text-gray-400">Начните покупки, чтобы добавить товары в корзину</p>
                      </div>
                    ) : (
                      cartItems.map((item) => (
                        <Card key={item.id} className="bg-naruto-darkBlue/50 border-naruto-blue/30">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="font-semibold text-white">{item.name}</h4>
                                <p className="text-naruto-gold font-bold">{item.price} ₽</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="w-8 h-8 p-0 border-naruto-blue text-naruto-blue hover:bg-naruto-blue hover:text-white"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Icon name="Minus" className="w-4 h-4" />
                                </Button>
                                <span className="w-8 text-center text-white font-semibold">{item.quantity}</span>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="w-8 h-8 p-0 border-naruto-blue text-naruto-blue hover:bg-naruto-blue hover:text-white"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Icon name="Plus" className="w-4 h-4" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="destructive" 
                                  className="ml-2"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Icon name="Trash2" className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="mt-2 text-right">
                              <span className="text-sm text-gray-400">Итого: </span>
                              <span className="text-naruto-gold font-bold">{item.price * item.quantity} ₽</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                  
                  {cartItems.length > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-naruto-dark border-t border-naruto-blue/30">
                      <Separator className="mb-4" />
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-white">Общая сумма:</span>
                        <span className="text-2xl font-bold text-naruto-gold">{getTotalPrice()} ₽</span>
                      </div>
                      <Button className="w-full bg-naruto-orange hover:bg-naruto-orange/80 text-white font-semibold py-3">
                        <Icon name="CreditCard" className="mr-2" />
                        Оформить заказ
                      </Button>
                    </div>
                  )}
                </SheetContent>
              </Sheet>
              <Button size="lg" variant="outline" className="border-naruto-blue text-naruto-blue hover:bg-naruto-blue hover:text-white px-8 py-4 text-lg font-semibold">
                <Icon name="Download" className="mr-2" />
                Скачать игру
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-8 bg-naruto-dark/50">
            <TabsTrigger value="info" className="text-sm">ℹ️ Инфо</TabsTrigger>
            <TabsTrigger value="characters" className="text-sm">🎯 Персонажи</TabsTrigger>
            <TabsTrigger value="copies" className="text-sm">📦 Копии</TabsTrigger>
            <TabsTrigger value="resources" className="text-sm">💎 Ресурсы</TabsTrigger>
            <TabsTrigger value="equipment" className="text-sm">🛡 Экипировка</TabsTrigger>
            <TabsTrigger value="custom" className="text-sm">🎨 Кастом</TabsTrigger>
          </TabsList>

          <TabsContent value="characters" className="space-y-8">
            {/* MR Characters */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-naruto-orange" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                🎯 Персонажи MR
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mrCharacters.map((character, index) => (
                  <Card key={index} className="bg-naruto-dark/80 border-naruto-blue/30 hover:border-naruto-orange/50 transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <img src={character.image} alt={character.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                      <CardTitle className="text-naruto-orange">{character.name}</CardTitle>
                      <Badge className="bg-naruto-gold text-black w-fit">MR</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {Object.entries(character.prices).map(([stars, price]) => (
                          <div key={stars} className="flex justify-between items-center">
                            <span className="text-gray-300">{stars}</span>
                            <span className="text-naruto-gold font-semibold">{price} ₽</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        className="w-full mt-4 bg-naruto-orange hover:bg-naruto-orange/80"
                        onClick={() => addToCart({name: `${character.name} 50★`, price: Object.values(character.prices)[0] as number})}
                      >
                        Купить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Special Characters */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-naruto-blue" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                🌀 Особые персонажи
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialCharacters.map((character, index) => (
                  <Card key={index} className="bg-naruto-dark/80 border-naruto-blue/30">
                    <CardHeader>
                      <img src={character.image} alt={character.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                      <CardTitle className="text-naruto-blue">{character.name}</CardTitle>
                      <Badge className="bg-naruto-blue text-white w-fit">Особый</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {Object.entries(character.prices).map(([stars, price]) => (
                          <div key={stars} className="flex justify-between items-center">
                            <span className="text-gray-300">{stars}</span>
                            <span className={`font-semibold ${typeof price === 'string' ? 'text-red-400' : 'text-naruto-gold'}`}>
                              {typeof price === 'string' ? price : `${price} ₽`}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4 bg-naruto-blue hover:bg-naruto-blue/80">
                        Купить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Elite Characters */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-purple-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                👑 Элитные персонажи UR/SP
              </h2>
              <Card className="bg-naruto-dark/80 border-purple-400/30 max-w-md">
                <CardHeader>
                  <CardTitle className="text-purple-400">{eliteCharacters.name}</CardTitle>
                  <Badge className="bg-purple-600 text-white w-fit">UR/SP</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(eliteCharacters.prices).map(([stars, price]) => (
                      <div key={stars} className="flex justify-between items-center">
                        <span className="text-gray-300">{stars}</span>
                        <span className="text-naruto-gold font-semibold">{price} ₽</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="copies">
            <h2 className="text-3xl font-bold mb-6 text-naruto-orange" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              📦 Копии персонажей
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {copies.map((item, index) => (
                <Card key={index} className={`bg-naruto-dark/80 border-naruto-blue/30 ${item.unavailable ? 'opacity-60' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-white">{item.name}</h3>
                        <p className="text-sm text-gray-400">{item.count}</p>
                        {item.unavailable && <Badge variant="destructive" className="text-xs">Недоступен</Badge>}
                      </div>
                      <div className="text-right">
                        <span className="text-naruto-gold font-bold">{item.price} ₽</span>
                        <Button size="sm" className="ml-2 bg-naruto-orange hover:bg-naruto-orange/80" disabled={item.unavailable}>
                          <Icon name="ShoppingCart" className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <h2 className="text-3xl font-bold mb-6 text-naruto-gold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              💎 Ресурсы для прокачки
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.map((item, index) => (
                <Card key={index} className="bg-naruto-dark/80 border-naruto-gold/30">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-white text-sm">{item.name}</h3>
                      <div className="text-right">
                        <span className="text-naruto-gold font-bold">{item.price} ₽</span>
                        <Button size="sm" className="ml-2 bg-naruto-gold text-black hover:bg-naruto-gold/80">
                          <Icon name="Plus" className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="equipment">
            <h2 className="text-3xl font-bold mb-6 text-gray-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              🛡 Боевая экипировка
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {equipment.map((item, index) => (
                <Card key={index} className="bg-naruto-dark/80 border-gray-500/30">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <div className="text-right">
                        <span className="text-naruto-gold font-bold">{item.price} ₽</span>
                        <Button size="sm" className="ml-2 bg-gray-600 hover:bg-gray-700">
                          <Icon name="Shield" className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="custom">
            <h2 className="text-3xl font-bold mb-6 text-pink-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              🎨 Персонализация
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {personalization.map((item, index) => (
                <Card key={index} className="bg-naruto-dark/80 border-pink-400/30">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <div className="text-right">
                        <span className="text-naruto-gold font-bold">{item.price} ₽</span>
                        <Button size="sm" className="ml-2 bg-pink-600 hover:bg-pink-700">
                          <Icon name="Palette" className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="info">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6 text-naruto-orange" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ℹ️ Информация об игре
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-naruto-dark/80 border-naruto-orange/30">
                  <CardHeader>
                    <CardTitle className="text-naruto-orange flex items-center">
                      <Icon name="Download" className="mr-2" />
                      Скачать игру
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Загрузите последнюю версию Last of Shinobi
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-naruto-orange hover:bg-naruto-orange/80">
                      <Icon name="Download" className="mr-2" />
                      Скачать APK
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-naruto-dark/80 border-naruto-blue/30">
                  <CardHeader>
                    <CardTitle className="text-naruto-blue flex items-center">
                      <Icon name="MessageCircle" className="mr-2" />
                      Telegram канал
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Присоединяйтесь к нашему сообществу
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-naruto-blue hover:bg-naruto-blue/80">
                      <Icon name="ExternalLink" className="mr-2" />
                      Открыть канал
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-naruto-dark/80 border-naruto-gold/30 md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-naruto-gold flex items-center">
                      <Icon name="Coins" className="mr-2" />
                      Обмен коинов на донат товары
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Используйте внутриигровые коины для покупки донат товаров
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Накапливайте коины в игре и обменивайте их на эксклюзивные товары из донат магазина. 
                      Курс обмена: 1000 коинов = 100 ₽ донат валюты.
                    </p>
                    <Button className="bg-naruto-gold text-black hover:bg-naruto-gold/80">
                      <Icon name="ArrowRightLeft" className="mr-2" />
                      Начать обмен
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-naruto-darkBlue/50 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/img/8cd9483e-2152-492d-b443-e8d416b6d79c.jpg" alt="Ninja weapons" className="w-16 h-16 object-cover rounded-full mr-4" />
            <h3 className="text-2xl font-bold text-naruto-orange" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Last of Shinobi
            </h3>
          </div>
          <p className="text-gray-400 mb-4">
            Магазин игровых товаров по мотивам аниме Наруто
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-naruto-orange">
              <Icon name="MessageCircle" className="mr-2" />
              Telegram
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-naruto-blue">
              <Icon name="Download" className="mr-2" />
              Скачать
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;