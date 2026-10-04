/* Chương VII – Biến dạng của vật rắn. Áp suất chất lỏng (SGK Vật lí 10 KNTT, tr.127–135) */
P10.addChapter({
  chapter: { n: 7, vi: "Biến dạng của vật rắn. Áp suất chất lỏng", en: "Deformation of solids. Liquid pressure", page: 127 },

  lessons: [
    /* ============================== BÀI 33 ============================== */
    {
      n: 33, vi: "Biến dạng của vật rắn", en: "Deformation of solids",
      pages: "128–130",
      practical: false,
      intro: {
        vi: "Người chơi nhảy bungee lao xuống từ trên cao, sợi dây buộc ở chân dãn dài ra rồi kéo người bật ngược lên. Trò chơi mạo hiểm này dựa trên hiện tượng vật lí nào?",
        en: "In a bungee jump, a person drops from a great height; the cord tied to their ankles stretches and then pulls them back up. Which physical effect makes this extreme sport possible?"
      },
      goals: [
        { vi: "Phân biệt được biến dạng đàn hồi, biến dạng kéo và biến dạng nén; nêu được giới hạn đàn hồi.", en: "Distinguish between elastic, tensile and compressive deformation, and state what the elastic limit is." },
        { vi: "Phát biểu và vận dụng được định luật Hooke F_{đh} = k|Δℓ|.", en: "State and apply Hooke's law, F_{đh} = k|Δℓ|." },
        { vi: "Giải thích được nguyên tắc hoạt động của bộ phận giảm xóc trong ô tô, xe máy.", en: "Explain how the shock absorbers of cars and motorbikes work." }
      ],
      blocks: [
        { t: "h", vi: "I. Biến dạng đàn hồi. Biến dạng kéo và biến dạng nén", en: "I. Elastic deformation. Tensile and compressive deformation" },
        { t: "p",
          vi: "Khi không có ngoại lực, vật rắn có hình dạng và kích thước xác định. Khi chịu ngoại lực, vật thay đổi hình dạng và kích thước: ta nói vật bị [[deformation|biến dạng]]. Ép quả bóng cao su vào tường, nén hoặc kéo lò xo, kéo dãn vòng dây cao su… đều làm vật biến dạng, và mức độ biến dạng phụ thuộc vào độ lớn của ngoại lực.",
          en: "With no external force, a solid has a definite shape and size. When an external force acts, its shape and size change: we say the object undergoes [[deformation|deformation]]. Pressing a rubber ball against a wall, squeezing or stretching a spring and stretching a rubber band all deform the object, and the amount of deformation depends on the size of the force." },
        { t: "law", name: { vi: "Biến dạng đàn hồi", en: "Elastic deformation" },
          vi: "Nếu khi thôi chịu ngoại lực, vật rắn lấy lại được hình dạng và kích thước ban đầu thì biến dạng của vật là [[elastic-deformation|biến dạng đàn hồi]]. Giới hạn mà trong đó vật rắn còn giữ được tính đàn hồi gọi là [[elastic-limit|giới hạn đàn hồi]].",
          en: "If a solid returns to its original shape and size when the external force is removed, its deformation is an [[elastic-deformation|elastic deformation]]. The limit within which a solid still behaves elastically is called its [[elastic-limit|elastic limit]]." },
        { t: "p",
          vi: "Khi vật chịu một cặp lực ngược chiều, vuông góc với bề mặt và hướng vào phía trong vật, ta có [[compressive-deformation|biến dạng nén]]: vật ngắn lại. Khi cặp lực đó hướng ra phía ngoài vật, ta có [[tensile-deformation|biến dạng kéo]]: vật dài ra (Hình 33.2).",
          en: "When a pair of opposite forces acts perpendicular to the surface and towards the inside of the object, we get [[compressive-deformation|compressive deformation]]: the object becomes shorter. When the pair of forces points outwards, we get [[tensile-deformation|tensile deformation]]: the object becomes longer (Figure 33.2)." },
        { t: "note",
          vi: "Ví dụ: cột chịu lực trong toà nhà bị biến dạng nén; sợi dây treo vật nặng, dây bungee khi căng bị biến dạng kéo. Nếu kéo lò xo hay dây cao su quá mạnh (vượt giới hạn đàn hồi), chúng không trở lại hình dạng ban đầu được nữa.",
          en: "Examples: a supporting column in a building is under compression; a rope holding a heavy load or a stretched bungee cord is under tension. If a spring or rubber band is pulled too hard (beyond its elastic limit), it no longer returns to its original shape." },

        { t: "h", vi: "II. Lực đàn hồi. Định luật Hooke", en: "II. Elastic force. Hooke's law" },
        { t: "p",
          vi: "Khi ta nén hoặc kéo hai đầu lò xo, tay cũng chịu lực từ lò xo theo chiều ngược lại. Đó là [[elastic-force|lực đàn hồi]] của lò xo: nó chống lại nguyên nhân gây biến dạng và có xu hướng đưa lò xo về hình dạng, kích thước ban đầu.",
          en: "When we squeeze or stretch the ends of a spring, our hands also feel forces from the spring in the opposite direction. This is the [[elastic-force|elastic force]] of the spring: it opposes whatever causes the deformation and tends to return the spring to its original shape and size." },
        { t: "p",
          vi: "Đồ thị lực đàn hồi F theo độ biến dạng Δℓ (Hình 33.3) có đoạn OA là đường thẳng đi qua gốc toạ độ: trong đoạn này F tỉ lệ thuận với [[extension|độ biến dạng]] Δℓ. Kết quả này được phát biểu thành [[hookes-law|định luật Hooke]].",
          en: "The graph of elastic force F against change in length Δℓ (Figure 33.3) has a straight section OA through the origin: there F is directly proportional to the [[extension|extension]] Δℓ. This result is stated as [[hookes-law|Hooke's law]]." },
        { t: "law", name: { vi: "Định luật Hooke", en: "Hooke's law" },
          vi: "Trong giới hạn đàn hồi, độ lớn lực đàn hồi của lò xo tỉ lệ thuận với độ biến dạng của lò xo.",
          en: "Within the elastic limit, the size of the elastic force of a spring is directly proportional to its change in length." },
        { t: "f", f: "F_{đh} = k|Δℓ|", no: "33.1",
          vi: "Tính lực đàn hồi của lò xo (hoặc độ cứng, độ biến dạng) khi lò xo còn trong giới hạn đàn hồi.",
          en: "Use it to find the elastic force of a spring (or its spring constant or change in length) within the elastic limit.",
          sym: [
            { s: "F_{đh}", vi: "độ lớn lực đàn hồi", en: "size of the elastic force", u: "N" },
            { s: "k", vi: "độ cứng (hệ số đàn hồi) của lò xo", en: "spring constant", u: "N/m" },
            { s: "Δℓ", vi: "độ biến dạng của lò xo", en: "change in length (extension or compression)", u: "m" }
          ] },
        { t: "p",
          vi: "Hằng số k gọi là hệ số đàn hồi hay [[spring-constant|độ cứng]] của lò xo; nó phụ thuộc vào kích thước, hình dạng và vật liệu làm lò xo. Trên đồ thị F theo Δℓ, đường thẳng càng dốc thì lò xo càng cứng (k càng lớn).",
          en: "The constant k is called the [[spring-constant|spring constant]] (stiffness) of the spring; it depends on the size, shape and material of the spring. On a graph of F against Δℓ, the steeper the line, the stiffer the spring (the larger k)." },
        { t: "note",
          vi: "Nếu ℓ là chiều dài khi lò xo biến dạng (dãn hoặc nén) và ℓ_{0} là [[natural-length|chiều dài tự nhiên]] (chưa biến dạng) thì Δℓ = ℓ − ℓ_{0}, nên có thể viết F = k|ℓ − ℓ_{0}|. Phần đồ thị ngoài đoạn OA ứng với lực vượt quá giới hạn đàn hồi: khi đó F không còn tỉ lệ thuận với Δℓ, và nếu treo vật quá nặng, lò xo mất tính đàn hồi.",
          en: "If ℓ is the length of the deformed (stretched or compressed) spring and ℓ_{0} is its [[natural-length|natural length]] (undeformed), then Δℓ = ℓ − ℓ_{0}, so we can write F = k|ℓ − ℓ_{0}|. The part of the graph beyond OA corresponds to forces beyond the elastic limit: F is then no longer proportional to Δℓ, and a load that is too heavy will permanently damage the spring." },
        { t: "ex",
          vi: { q: "Một lò xo đặt thẳng đứng, gắn vật nặng 200 g. Khi vật treo ở dưới, lò xo dài 17 cm; khi vật đặt ở trên, lò xo dài 13 cm. Lấy g = 10 m/s², bỏ qua trọng lượng móc treo và giá đỡ. Tính độ cứng của lò xo.",
                a: "Ở vị trí cân bằng, lực đàn hồi cân bằng trọng lực: F_{đh} = P = m.g = 0,2 × 10 = 2 N.\nTreo ở dưới (lò xo dãn): k(0,17 − ℓ_{0}) = 2.\nĐặt ở trên (lò xo nén): k(ℓ_{0} − 0,13) = 2.\nHai độ biến dạng bằng nhau ⇒ ℓ_{0} = 0,15 m.\nk = 2/0,02 = 100 N/m." },
          en: { q: "A spring is mounted vertically with a 200 g mass. When the mass hangs below it, the spring is 17 cm long; when the mass rests on top, the spring is 13 cm long. Take g = 10 m/s² and ignore the weight of the hook and holder. Find the spring constant.",
                a: "At equilibrium the elastic force balances the weight: F_{đh} = P = m.g = 0.2 × 10 = 2 N.\nHanging below (stretched): k(0.17 − ℓ_{0}) = 2.\nResting on top (compressed): k(ℓ_{0} − 0.13) = 2.\nThe two changes in length are equal ⇒ ℓ_{0} = 0.15 m.\nk = 2/0.02 = 100 N/m." } },
        { t: "note",
          vi: "Khi làm thí nghiệm kiểm chứng định luật Hooke, khối lượng lò xo cần rất nhỏ so với khối lượng các vật treo, để có thể bỏ qua trọng lượng của chính lò xo.",
          en: "In experiments to test Hooke's law, the mass of the spring should be much smaller than the masses hung on it, so that the spring's own weight can be ignored." },
        { t: "p", ngoaiSGK: true,
          vi: "Ứng dụng: [[shock-absorber|bộ phận giảm xóc]] của ô tô, xe máy có lò xo. Khi bánh xe gặp ổ gà, lò xo bị nén và lực đàn hồi đẩy ngược lại, nên chấn động truyền lên khung xe và người ngồi giảm đi nhiều.",
          en: "Application: the [[shock-absorber|shock absorbers]] of cars and motorbikes contain springs. When a wheel hits a pothole, the spring is compressed and its elastic force pushes back, so much less of the jolt reaches the frame and the rider." }
      ],
      summary: [
        { vi: "Biến dạng đàn hồi: vật lấy lại hình dạng, kích thước ban đầu khi thôi chịu lực; giới hạn đàn hồi là giới hạn mà vật còn giữ được tính đàn hồi.", en: "Elastic deformation: the object returns to its original shape and size when the force is removed; the elastic limit is the limit within which it still behaves elastically." },
        { vi: "Biến dạng nén: cặp lực vuông góc với bề mặt, hướng vào trong vật; biến dạng kéo: cặp lực hướng ra ngoài vật.", en: "Compressive deformation: a pair of forces perpendicular to the surface, pointing into the object; tensile deformation: the pair points outwards." },
        { vi: "Lực đàn hồi chống lại nguyên nhân gây biến dạng; độ cứng k (N/m) phụ thuộc kích thước, hình dạng, vật liệu lò xo.", en: "The elastic force opposes the cause of deformation; the spring constant k (N/m) depends on the size, shape and material of the spring." },
        { vi: "Định luật Hooke: trong giới hạn đàn hồi, F_{đh} = k|Δℓ| với Δℓ = ℓ − ℓ_{0}.", en: "Hooke's law: within the elastic limit, F_{đh} = k|Δℓ| where Δℓ = ℓ − ℓ_{0}." }
      ],
      check: [
        { q: { vi: "Một thanh chịu tác dụng của cặp lực ngược chiều, vuông góc với bề mặt và hướng ra phía ngoài thanh. Thanh bị", en: "A bar is acted on by a pair of opposite forces perpendicular to its surface and pointing outwards. The bar undergoes" },
          o: [
            { vi: "biến dạng nén.", en: "compressive deformation." },
            { vi: "biến dạng kéo.", en: "tensile deformation." },
            { vi: "không biến dạng.", en: "no deformation." },
            { vi: "biến dạng nén rồi kéo.", en: "compression followed by tension." }
          ], a: 1,
          why: { vi: "Cặp lực hướng ra ngoài vật làm vật dài ra: biến dạng kéo.", en: "Forces pointing outwards make the object longer: tensile deformation." } },
        { q: { vi: "Thuật ngữ tiếng Anh 'spring constant' có nghĩa là gì?", en: "What is the Vietnamese term for 'spring constant'?" },
          o: [
            { vi: "Lực đàn hồi của lò xo", en: "Lực đàn hồi của lò xo" },
            { vi: "Chiều dài tự nhiên của lò xo", en: "Chiều dài tự nhiên của lò xo" },
            { vi: "Độ cứng của lò xo", en: "Độ cứng của lò xo" },
            { vi: "Giới hạn đàn hồi của lò xo", en: "Giới hạn đàn hồi của lò xo" }
          ], a: 2,
          why: { vi: "Spring constant = độ cứng (hệ số đàn hồi) k của lò xo, đơn vị N/m.", en: "Spring constant = độ cứng (hệ số đàn hồi) k, unit N/m." } },
        { q: { vi: "Kéo một lò xo vượt quá giới hạn đàn hồi rồi thả ra. Điều gì xảy ra?", en: "A spring is stretched beyond its elastic limit and then released. What happens?" },
          o: [
            { vi: "Lò xo trở về đúng chiều dài tự nhiên ban đầu.", en: "It returns exactly to its original natural length." },
            { vi: "Độ cứng của lò xo tăng lên gấp đôi.", en: "Its spring constant doubles." },
            { vi: "Lực đàn hồi vẫn tỉ lệ thuận với độ biến dạng.", en: "The elastic force is still proportional to the change in length." },
            { vi: "Lò xo không lấy lại được hình dạng, kích thước ban đầu.", en: "It does not return to its original shape and size." }
          ], a: 3,
          why: { vi: "Ngoài giới hạn đàn hồi, biến dạng không còn là biến dạng đàn hồi và định luật Hooke không còn đúng.", en: "Beyond the elastic limit the deformation is no longer elastic and Hooke's law no longer applies." } },
        { q: { vi: "Đồ thị F theo Δℓ của hai lò xo A và B đều là đường thẳng qua gốc toạ độ; đường của A dốc hơn. Kết luận nào đúng?", en: "Graphs of F against Δℓ for springs A and B are both straight lines through the origin; A's line is steeper. Which conclusion is correct?" },
          o: [
            { vi: "Lò xo A cứng hơn lò xo B (k_{A} > k_{B}).", en: "Spring A is stiffer than spring B (k_{A} > k_{B})." },
            { vi: "Lò xo B cứng hơn lò xo A (k_{B} > k_{A}).", en: "Spring B is stiffer than spring A (k_{B} > k_{A})." },
            { vi: "Hai lò xo có cùng độ cứng.", en: "The two springs have the same spring constant." },
            { vi: "Lò xo A không tuân theo định luật Hooke.", en: "Spring A does not obey Hooke's law." }
          ], a: 0,
          why: { vi: "Độ dốc của đồ thị là k = F/|Δℓ|: đường càng dốc thì k càng lớn. Cả hai đều là đường thẳng qua gốc nên đều tuân theo định luật Hooke.", en: "The gradient of the graph is k = F/|Δℓ|: the steeper the line, the larger k. Both lines are straight through the origin, so both obey Hooke's law." } },
        { q: { vi: "Lò xo có độ cứng 40 N/m, chiều dài tự nhiên 25 cm, bị nén bởi lực 2 N (trong giới hạn đàn hồi). Chiều dài của lò xo khi đó là", en: "A spring with spring constant 40 N/m and natural length 25 cm is compressed by a 2 N force (within the elastic limit). Its length is then" },
          o: [
            { vi: "30 cm.", en: "30 cm." },
            { vi: "23 cm.", en: "23 cm." },
            { vi: "20 cm.", en: "20 cm." },
            { vi: "5 cm.", en: "5 cm." }
          ], a: 2,
          why: { vi: "|Δℓ| = F/k = 2/40 = 0,05 m = 5 cm. Lò xo bị nén nên ℓ = 25 − 5 = 20 cm.", en: "|Δℓ| = F/k = 2/40 = 0.05 m = 5 cm. The spring is compressed, so ℓ = 25 − 5 = 20 cm." } }
      ]
    },

    /* ============================== BÀI 34 ============================== */
    {
      n: 34, vi: "Khối lượng riêng. Áp suất chất lỏng", en: "Density. Liquid pressure",
      pages: "131–135",
      practical: false,
      intro: {
        vi: "Khối lượng riêng của một chất lỏng và áp suất mà chất lỏng đó gây ra có liên quan với nhau như thế nào?",
        en: "How is the density of a liquid related to the pressure that the liquid produces?"
      },
      goals: [
        { vi: "Nêu được định nghĩa và vận dụng được công thức khối lượng riêng ρ = m/V, áp suất p = F_{N}/S.", en: "Define density and pressure and use ρ = m/V and p = F_{N}/S." },
        { vi: "Vận dụng được công thức áp suất chất lỏng p = p_{a} + ρ.g.h và phương trình Δp = ρ.g.Δh.", en: "Use the liquid pressure formula p = p_{a} + ρ.g.h and the equation Δp = ρ.g.Δh." },
        { vi: "Giải thích được vì sao thợ lặn muốn lặn sâu phải có thiết bị lặn chuyên dụng.", en: "Explain why divers need special equipment to dive deep." }
      ],
      blocks: [
        { t: "h", vi: "I. Khối lượng riêng", en: "I. Density" },
        { t: "p",
          vi: "[[density|Khối lượng riêng]] của một chất là khối lượng của một đơn vị thể tích chất đó. Kí hiệu ρ (đọc là “rô”).",
          en: "The [[density|density]] of a substance is the mass of a unit volume of that substance. Its symbol is ρ (the Greek letter rho)." },
        { t: "f", f: "ρ = m/V", no: "34.1",
          vi: "Tính khối lượng riêng từ khối lượng và thể tích (hoặc tính m, V khi biết ρ).",
          en: "Use it to find density from mass and volume (or m or V when ρ is known).",
          sym: [
            { s: "ρ", vi: "khối lượng riêng", en: "density", u: "kg/m³" },
            { s: "m", vi: "khối lượng", en: "mass", u: "kg" },
            { s: "V", vi: "thể tích", en: "volume", u: "m³" }
          ] },
        { t: "note",
          vi: "Đơn vị SI của khối lượng riêng là kg/m³; người ta cũng dùng g/cm³, với 1 g/cm³ = 1 000 kg/m³. Khối lượng riêng phụ thuộc nhiệt độ: khi nóng lên, phần lớn các chất nở ra (V tăng) nên ρ giảm.",
          en: "The SI unit of density is kg/m³; g/cm³ is also used, with 1 g/cm³ = 1000 kg/m³. Density depends on temperature: when heated, most substances expand (V increases), so ρ decreases." },
        { t: "table",
          head: [
            { vi: "Chất rắn", en: "Solid" }, { vi: "ρ (kg/m³)", en: "ρ (kg/m³)" },
            { vi: "Chất lỏng", en: "Liquid" }, { vi: "ρ (kg/m³)", en: "ρ (kg/m³)" },
            { vi: "Chất khí", en: "Gas" }, { vi: "ρ (kg/m³)", en: "ρ (kg/m³)" }
          ],
          rows: [
            [ { vi: "Chì", en: "Lead" }, { vi: "11 300", en: "11 300" }, { vi: "Thuỷ ngân", en: "Mercury" }, { vi: "13 500", en: "13 500" }, { vi: "Carbonic", en: "Carbon dioxide" }, { vi: "1,98", en: "1.98" } ],
            [ { vi: "Đồng", en: "Copper" }, { vi: "8 900", en: "8900" }, { vi: "Nước", en: "Water" }, { vi: "999", en: "999" }, { vi: "Oxygen", en: "Oxygen" }, { vi: "1,43", en: "1.43" } ],
            [ { vi: "Thép", en: "Steel" }, { vi: "7 800", en: "7800" }, { vi: "Xăng", en: "Petrol" }, { vi: "700", en: "700" }, { vi: "Hydrogen", en: "Hydrogen" }, { vi: "0,09", en: "0.09" } ]
          ] },
        { t: "table",
          head: [ { vi: "Nhiệt độ của nước", en: "Water temperature" }, { vi: "ρ (kg/m³)", en: "ρ (kg/m³)" } ],
          rows: [
            [ { vi: "20 °C", en: "20 °C" }, { vi: "999", en: "999" } ],
            [ { vi: "40 °C", en: "40 °C" }, { vi: "992", en: "992" } ],
            [ { vi: "60 °C", en: "60 °C" }, { vi: "983", en: "983" } ],
            [ { vi: "80 °C", en: "80 °C" }, { vi: "972", en: "972" } ]
          ] },
        { t: "ex",
          vi: { q: "Một hợp kim đồng và bạc có khối lượng riêng 10,3 g/cm³. Tính khối lượng bạc và đồng trong 100 g hợp kim, biết khối lượng riêng của đồng là 8,9 g/cm³, của bạc là 10,4 g/cm³ (coi thể tích hợp kim bằng tổng thể tích các thành phần).",
                a: "Thể tích hợp kim: V = 100/10,3 ≈ 9,709 cm³.\nm_{bạc} + m_{đồng} = 100 (g) và m_{bạc}/10,4 + m_{đồng}/8,9 = 9,709 (cm³).\nGiải hệ: m_{bạc} ≈ 94,2 g; m_{đồng} ≈ 5,8 g." },
          en: { q: "A copper–silver alloy has a density of 10.3 g/cm³. Find the masses of silver and copper in 100 g of the alloy, given that copper has a density of 8.9 g/cm³ and silver 10.4 g/cm³ (assume the alloy's volume is the sum of the volumes of its parts).",
                a: "Volume of the alloy: V = 100/10.3 ≈ 9.709 cm³.\nm_{silver} + m_{copper} = 100 (g) and m_{silver}/10.4 + m_{copper}/8.9 = 9.709 (cm³).\nSolving: m_{silver} ≈ 94.2 g; m_{copper} ≈ 5.8 g." } },

        { t: "h", vi: "II. Áp lực và áp suất", en: "II. Normal force and pressure" },
        { t: "p",
          vi: "Cuốn sách nằm yên trên mặt bàn ngang chịu trọng lực vec{P} và lực đẩy vec{F} của mặt bàn. Theo định luật 3 Newton, cuốn sách ép lên mặt bàn một lực vec{F}_{N} thẳng đứng hướng xuống, có độ lớn bằng F. Lực ép có phương vuông góc với mặt bị ép như vậy gọi là [[normal-force|áp lực]] (Hình 34.1).",
          en: "A book at rest on a horizontal table is acted on by its weight vec{P} and the upward push vec{F} of the table. By Newton's third law, the book presses down on the table with a vertical force vec{F}_{N} of the same size as F. A pressing force perpendicular to the surface like this is called the [[normal-force|normal force]] (Figure 34.1)." },
        { t: "note",
          vi: "Áp lực không phải lúc nào cũng bằng trọng lượng: cuốn sách trên mặt bàn nghiêng góc α có áp lực F_{N} = P.cosα. Thí nghiệm với khối hộp đặt trên cát (Hình 34.2) cho thấy tác dụng của áp lực càng mạnh khi áp lực càng lớn và diện tích bị ép càng nhỏ.",
          en: "The normal force is not always equal to the weight: for a book on a table tilted at angle α, F_{N} = P.cosα. The experiment with blocks on sand (Figure 34.2) shows that the effect of a normal force is greater when the force is larger and the area pressed is smaller." },
        { t: "p",
          vi: "Để đặc trưng cho tác dụng của áp lực, người ta dùng [[pressure|áp suất]]: độ lớn của áp lực chia cho diện tích bị ép. Đơn vị của áp suất là N/m², còn gọi là [[pascal|paxcan]] (Pa).",
          en: "To describe the effect of a normal force we use [[pressure|pressure]]: the size of the normal force divided by the area it acts on. The unit of pressure is N/m², also called the [[pascal|pascal]] (Pa)." },
        { t: "f", f: "p = F_{N}/S", no: "34.2",
          vi: "Tính áp suất khi biết áp lực và diện tích bị ép; 1 Pa = 1 N/m².",
          en: "Use it to find pressure from the normal force and the area pressed; 1 Pa = 1 N/m².",
          sym: [
            { s: "p", vi: "áp suất", en: "pressure", u: "Pa" },
            { s: "F_{N}", vi: "áp lực (lực ép vuông góc với mặt bị ép)", en: "normal force (force perpendicular to the surface)", u: "N" },
            { s: "S", vi: "diện tích bị ép", en: "area pressed", u: "m²" }
          ] },
        { t: "ex",
          vi: { q: "Một người nặng 50 kg đứng trên mặt đất nằm ngang. Diện tích tiếp xúc của mỗi bàn chân với đất là 0,015 m². Lấy g = 10 m/s². Tính áp suất người đó tác dụng lên mặt đất khi a) đứng cả hai chân; b) đứng một chân.",
                a: "Áp lực bằng trọng lượng: F_{N} = m.g = 50 × 10 = 500 N.\na) S = 2 × 0,015 = 0,030 m² ⇒ p = 500/0,030 ≈ 16 667 Pa (≈ 1,67.10^{4} Pa).\nb) S = 0,015 m² ⇒ p = 500/0,015 ≈ 33 333 Pa (≈ 3,33.10^{4} Pa)." },
          en: { q: "A 50 kg person stands on horizontal ground. Each foot has a contact area of 0.015 m². Take g = 10 m/s². Find the pressure on the ground when the person stands a) on both feet; b) on one foot.",
                a: "The normal force equals the weight: F_{N} = m.g = 50 × 10 = 500 N.\na) S = 2 × 0.015 = 0.030 m² ⇒ p = 500/0.030 ≈ 16 667 Pa (≈ 1.67 × 10^{4} Pa).\nb) S = 0.015 m² ⇒ p = 500/0.015 ≈ 33 333 Pa (≈ 3.33 × 10^{4} Pa)." } },
        { t: "note",
          vi: "Xe tăng nặng hơn ô tô nhiều nhưng có xích rộng, diện tích tiếp xúc lớn nên áp suất lên đất nhỏ, không bị lún trên đất bùn. Lưỡi xẻng nhọn có diện tích tiếp xúc nhỏ nên áp suất lớn, xén đất dễ hơn.",
          en: "A tank is much heavier than a car, but its wide tracks give a large contact area, so the pressure on the ground is small and it does not sink into mud. A pointed spade has a small contact area, so it produces a large pressure and cuts into soil more easily." },
        { t: "table",
          head: [ { vi: "Áp suất tại một số vị trí", en: "Pressure at some places" }, { vi: "p (Pa)", en: "p (Pa)" } ],
          rows: [
            [ { vi: "Ở tâm Trái Đất", en: "At the centre of the Earth" }, { vi: "4.10^{11}", en: "4 × 10^{11}" } ],
            [ { vi: "Nước ở đáy biển sâu nhất", en: "Water at the bottom of the deepest ocean" }, { vi: "1,1.10^{8}", en: "1.1 × 10^{8}" } ],
            [ { vi: "Không khí trong lốp ô tô", en: "Air in a car tyre" }, { vi: "4.10^{5}", en: "4 × 10^{5}" } ],
            [ { vi: "Khí quyển ở độ cao mực nước biển", en: "Atmosphere at sea level" }, { vi: "1.10^{5}", en: "1 × 10^{5}" } ]
          ] },

        { t: "h", vi: "III. Áp suất của chất lỏng", en: "III. Pressure in liquids" },
        { t: "p",
          vi: "Khi lặn xuống nước, ta cảm thấy nước ép lên cơ thể, lặn càng sâu càng bị ép mạnh. Thí nghiệm với bình cầu có nhiều lỗ nhỏ (Hình 34.7) cho thấy chất lỏng gây ra [[liquid-pressure|áp suất]] lên mọi vật ở trong nó, và khác với vật rắn, áp suất này tác dụng theo mọi hướng.",
          en: "When we dive, we feel the water pressing on our body, and the deeper we go, the stronger the push. The experiment with a glass bulb with many small holes (Figure 34.7) shows that a liquid exerts [[liquid-pressure|pressure]] on everything in it and, unlike a solid, this pressure acts in all directions." },
        { t: "p",
          vi: "Xét cột chất lỏng hình trụ đứng yên, diện tích đáy S, chiều cao h (Hình 34.8). Trọng lượng cột là P = m.g = ρ.S.h.g, chia cho diện tích đáy S ta được áp suất do chất lỏng gây ra ở [[depth|độ sâu]] h so với [[free-surface|mặt thoáng]]:",
          en: "Consider a cylinder of liquid at rest with base area S and height h (Figure 34.8). Its weight is P = m.g = ρ.S.h.g; dividing by the base area S gives the pressure due to the liquid at a [[depth|depth]] h below the [[free-surface|free surface]]:" },
        { t: "f", f: "p = ρ.g.h", no: "",
          vi: "Áp suất do riêng chất lỏng gây ra tại độ sâu h.",
          en: "The pressure due to the liquid alone at depth h.",
          sym: [
            { s: "p", vi: "áp suất do chất lỏng gây ra", en: "pressure due to the liquid", u: "Pa" },
            { s: "ρ", vi: "khối lượng riêng của chất lỏng", en: "density of the liquid", u: "kg/m³" },
            { s: "g", vi: "gia tốc trọng trường", en: "acceleration of free fall", u: "m/s²" },
            { s: "h", vi: "độ sâu so với mặt thoáng (chiều cao cột chất lỏng)", en: "depth below the free surface (height of the liquid column)", u: "m" }
          ] },
        { t: "p",
          vi: "Trên mặt thoáng còn có [[atmospheric-pressure|áp suất khí quyển]] p_{a}; chất lỏng truyền nguyên vẹn áp suất này xuống đáy bình. Vì chất lỏng truyền áp suất theo mọi hướng, công thức dưới đây cũng cho áp suất tại các điểm trên thành bình ở cùng độ sâu h.",
          en: "There is also [[atmospheric-pressure|atmospheric pressure]] p_{a} on the free surface, and the liquid passes it on unchanged to the bottom. Because a liquid transmits pressure in all directions, the formula below also gives the pressure at points on the side of the container at the same depth h." },
        { t: "f", f: "p = p_{a} + ρ.g.h", no: "",
          vi: "Áp suất toàn phần tại độ sâu h trong chất lỏng đứng yên.",
          en: "The total pressure at depth h in a liquid at rest.",
          sym: [
            { s: "p", vi: "áp suất tại độ sâu h", en: "pressure at depth h", u: "Pa" },
            { s: "p_{a}", vi: "áp suất khí quyển trên mặt thoáng", en: "atmospheric pressure on the free surface", u: "Pa" },
            { s: "ρ.g.h", vi: "phần áp suất do chất lỏng gây ra", en: "the part of the pressure due to the liquid", u: "Pa" }
          ] },
        { t: "ex",
          vi: { q: "Một khối lập phương cạnh 0,30 m chìm 2/3 trong nước có khối lượng riêng 1 000 kg/m³. Lấy g = 9,8 m/s². Tính áp suất do nước tác dụng lên mặt dưới của khối và xác định lực do áp suất này gây ra.",
                a: "Độ sâu mặt dưới: h = 2/3 × 0,30 = 0,20 m.\np = ρ.g.h = 1 000 × 9,8 × 0,20 = 1 960 Pa.\nDiện tích mặt dưới: S = 0,30² = 0,09 m².\nF = p.S = 1 960 × 0,09 ≈ 176 N; phương thẳng đứng, chiều từ dưới lên." },
          en: { q: "A cube of side 0.30 m floats with 2/3 of it under water (density 1000 kg/m³). Take g = 9.8 m/s². Find the pressure of the water on the bottom face and the force it produces.",
                a: "Depth of the bottom face: h = 2/3 × 0.30 = 0.20 m.\np = ρ.g.h = 1000 × 9.8 × 0.20 = 1960 Pa.\nArea of the bottom face: S = 0.30² = 0.09 m².\nF = p.S = 1960 × 0.09 ≈ 176 N; vertical, acting upwards." } },

        { t: "h", vi: "Phương trình cơ bản của chất lưu đứng yên", en: "The basic equation for a fluid at rest" },
        { t: "p",
          vi: "Trong một [[fluid|chất lưu]] đứng yên, xét hai điểm M và N ở độ sâu h_{2} và h_{1} (Hình 34.10). Vì p_{N} = p_{a} + ρ.g.h_{1} và p_{M} = p_{a} + ρ.g.h_{2} nên p_{N} − p_{M} = ρ.g.(h_{1} − h_{2}). Đây là [[hydrostatic-equation|phương trình cơ bản của chất lưu đứng yên]].",
          en: "In a [[fluid|fluid]] at rest, take two points M and N at depths h_{2} and h_{1} (Figure 34.10). Since p_{N} = p_{a} + ρ.g.h_{1} and p_{M} = p_{a} + ρ.g.h_{2}, we get p_{N} − p_{M} = ρ.g.(h_{1} − h_{2}). This is the [[hydrostatic-equation|basic equation for a fluid at rest]]." },
        { t: "f", f: "Δp = ρ.g.Δh", no: "34.3",
          vi: "Tính độ chênh lệch áp suất giữa hai điểm trong chất lưu đứng yên khi biết độ chênh lệch độ sâu.",
          en: "Use it to find the pressure difference between two points in a fluid at rest from their difference in depth.",
          sym: [
            { s: "Δp", vi: "độ chênh lệch áp suất", en: "pressure difference", u: "Pa" },
            { s: "ρ", vi: "khối lượng riêng của chất lưu", en: "density of the fluid", u: "kg/m³" },
            { s: "g", vi: "gia tốc trọng trường", en: "acceleration of free fall", u: "m/s²" },
            { s: "Δh", vi: "độ chênh lệch độ sâu", en: "difference in depth", u: "m" }
          ] },
        { t: "note",
          vi: "Hệ quả: các điểm nằm trên cùng một mặt phẳng nằm ngang trong chất lỏng đứng yên (Δh = 0) có áp suất bằng nhau. Độ chênh lệch áp suất chỉ phụ thuộc vào độ chênh lệch độ sâu, không phụ thuộc vào lượng chất lỏng – trong ống nhỏ cũng như trong hồ rộng hay đại dương.",
          en: "Consequences: points on the same horizontal level in a liquid at rest (Δh = 0) have the same pressure. The pressure difference depends only on the difference in depth, not on the amount of liquid – it is the same in a narrow tube as in a wide lake or an ocean." },
        { t: "ex",
          vi: { q: "Tính độ chênh lệch áp suất của nước giữa hai điểm thuộc hai mặt phẳng nằm ngang cách nhau 20 cm. Lấy ρ = 1 000 kg/m³, g = 9,8 m/s².",
                a: "Δh = 20 cm = 0,20 m.\nΔp = ρ.g.Δh = 1 000 × 9,8 × 0,20 = 1 960 Pa." },
          en: { q: "Find the difference in water pressure between two points on horizontal levels 20 cm apart. Take ρ = 1000 kg/m³ and g = 9.8 m/s².",
                a: "Δh = 20 cm = 0.20 m.\nΔp = ρ.g.Δh = 1000 × 9.8 × 0.20 = 1960 Pa." } },
        { t: "p",
          vi: "Thí nghiệm thùng tô-nô của Pascal (Hình 34.11): chỉ cần đổ khoảng 1 lít nước vào đầy một ống thuỷ tinh nhỏ cao khoảng 10 m cắm vào thùng gỗ đầy nước là đủ làm vỡ toang thùng, vì áp suất tăng theo chiều cao cột nước chứ không theo lượng nước.",
          en: "Pascal's barrel experiment (Figure 34.11): pouring only about 1 litre of water into a thin glass tube about 10 m tall, fitted into a full wooden barrel, is enough to burst the barrel, because the pressure increases with the height of the water column, not with the amount of water." },
        { t: "note", ngoaiSGK: true,
          vi: "Gợi ý cho mục “Em có thể”: dưới nước, cứ xuống sâu thêm khoảng 10 m thì áp suất tăng thêm ρ.g.h ≈ 1 000 × 9,8 × 10 ≈ 1.10^{5} Pa, xấp xỉ một lần áp suất khí quyển. Ở độ sâu lớn, áp suất nước rất lớn ép lên cơ thể, nên thợ lặn cần thiết bị lặn chuyên dụng (bình khí, bộ đồ lặn) để thở và chịu được áp suất.",
          en: "Hint for the “You can” box: in water, every extra 10 m of depth adds about ρ.g.h ≈ 1000 × 9.8 × 10 ≈ 1 × 10^{5} Pa, roughly one extra atmosphere. At great depths the water pressure on the body is very large, so divers need special equipment (air tanks, diving suits) to breathe and withstand the pressure." }
      ],
      summary: [
        { vi: "Khối lượng riêng: ρ = m/V; đơn vị kg/m³ hoặc g/cm³ (1 g/cm³ = 1 000 kg/m³).", en: "Density: ρ = m/V; unit kg/m³ or g/cm³ (1 g/cm³ = 1000 kg/m³)." },
        { vi: "Áp suất: p = F_{N}/S, trong đó F_{N} là áp lực vuông góc với mặt bị ép, S là diện tích bị ép; 1 Pa = 1 N/m².", en: "Pressure: p = F_{N}/S, where F_{N} is the normal force perpendicular to the surface and S is the area pressed; 1 Pa = 1 N/m²." },
        { vi: "Áp suất chất lỏng: p = p_{a} + ρ.g.h; chất lỏng truyền áp suất theo mọi hướng.", en: "Liquid pressure: p = p_{a} + ρ.g.h; a liquid transmits pressure in all directions." },
        { vi: "Phương trình cơ bản của chất lưu đứng yên: Δp = ρ.g.Δh.", en: "Basic equation for a fluid at rest: Δp = ρ.g.Δh." }
      ],
      check: [
        { q: { vi: "Công thức tính khối lượng riêng là", en: "The formula for density is" },
          o: [
            { vi: "ρ = m.V", en: "ρ = m.V" },
            { vi: "ρ = V/m", en: "ρ = V/m" },
            { vi: "ρ = m.g/V", en: "ρ = m.g/V" },
            { vi: "ρ = m/V", en: "ρ = m/V" }
          ], a: 3,
          why: { vi: "Khối lượng riêng là khối lượng của một đơn vị thể tích: ρ = m/V (34.1).", en: "Density is the mass per unit volume: ρ = m/V (34.1)." } },
        { q: { vi: "Thuật ngữ tiếng Anh của 'áp lực' (lực ép vuông góc với mặt bị ép) là gì?", en: "Which English term means 'áp lực' (the force pressing perpendicular to a surface)?" },
          o: [
            { vi: "pressure", en: "pressure" },
            { vi: "normal force", en: "normal force" },
            { vi: "tension", en: "tension" },
            { vi: "density", en: "density" }
          ], a: 1,
          why: { vi: "Áp lực = normal force (F_{N}); áp suất mới là pressure (p).", en: "Áp lực = normal force (F_{N}); pressure (p) is áp suất." } },
        { q: { vi: "Xe tăng nặng hơn ô tô nhiều nhưng chạy được trên đất bùn mà không bị lún vì", en: "A tank is much heavier than a car but can cross mud without sinking because" },
          o: [
            { vi: "diện tích tiếp xúc của xích xe tăng lớn nên áp suất lên đất nhỏ.", en: "its tracks have a large contact area, so the pressure on the ground is small." },
            { vi: "áp lực của xe tăng lên đất nhỏ hơn của ô tô.", en: "its normal force on the ground is smaller than the car's." },
            { vi: "xe tăng có khối lượng riêng nhỏ hơn bùn.", en: "the tank has a lower density than mud." },
            { vi: "áp suất không phụ thuộc vào diện tích bị ép.", en: "pressure does not depend on the area pressed." }
          ], a: 0,
          why: { vi: "p = F_{N}/S: áp lực lớn nhưng S rất lớn nên p nhỏ.", en: "p = F_{N}/S: the normal force is large, but S is very large, so p is small." } },
        { q: { vi: "Phát biểu nào đúng về áp suất của chất lỏng đứng yên?", en: "Which statement about pressure in a liquid at rest is correct?" },
          o: [
            { vi: "Chỉ tác dụng lên đáy bình theo phương thẳng đứng.", en: "It acts only on the bottom of the container, vertically." },
            { vi: "Càng xuống sâu, áp suất càng giảm.", en: "It decreases as the depth increases." },
            { vi: "Tác dụng theo mọi hướng và tăng theo độ sâu.", en: "It acts in all directions and increases with depth." },
            { vi: "Phụ thuộc vào diện tích đáy bình.", en: "It depends on the area of the container's base." }
          ], a: 2,
          why: { vi: "Chất lỏng truyền áp suất theo mọi hướng; p = p_{a} + ρ.g.h tăng theo h và không phụ thuộc diện tích đáy.", en: "A liquid transmits pressure in all directions; p = p_{a} + ρ.g.h increases with h and does not depend on the base area." } },
        { q: { vi: "Một người nặng 50 kg đứng một chân trên mặt đất nằm ngang, diện tích tiếp xúc của bàn chân là 0,015 m². Lấy g = 10 m/s². Áp suất người đó tác dụng lên mặt đất xấp xỉ", en: "A 50 kg person stands on one foot on horizontal ground; the foot's contact area is 0.015 m². Take g = 10 m/s². The pressure on the ground is about" },
          o: [
            { vi: "750 Pa.", en: "750 Pa." },
            { vi: "3 333 Pa.", en: "3333 Pa." },
            { vi: "16 667 Pa.", en: "16 667 Pa." },
            { vi: "33 333 Pa.", en: "33 333 Pa." }
          ], a: 3,
          why: { vi: "F_{N} = m.g = 500 N; p = F_{N}/S = 500/0,015 ≈ 33 333 Pa. (16 667 Pa là khi đứng hai chân.)", en: "F_{N} = m.g = 500 N; p = F_{N}/S = 500/0.015 ≈ 33 333 Pa. (16 667 Pa is for standing on both feet.)" } }
      ]
    }
  ],

  terms: [
    /* Bài 33 */
    { id: "deformation", l: 33, vi: "Sự biến dạng", en: "deformation", ipa: "/ˌdiːfɔːˈmeɪʃn/",
      pos: "n", sym: "", unit: "",
      defVi: "Sự thay đổi hình dạng và kích thước của vật rắn khi có ngoại lực tác dụng.",
      defEn: "A change in the shape and size of a solid caused by an external force.",
      exEn: "Squeezing a rubber ball causes deformation.", exVi: "Bóp quả bóng cao su làm nó bị biến dạng." },
    { id: "elastic-deformation", l: 33, vi: "Biến dạng đàn hồi", en: "elastic deformation", ipa: "/ɪˈlæstɪk ˌdiːfɔːˈmeɪʃn/",
      pos: "n", sym: "", unit: "",
      defVi: "Biến dạng mà vật rắn lấy lại được hình dạng và kích thước ban đầu khi thôi chịu ngoại lực.",
      defEn: "A deformation after which the solid returns to its original shape and size when the force is removed.",
      exEn: "A gently stretched spring shows elastic deformation.", exVi: "Lò xo bị kéo nhẹ có biến dạng đàn hồi." },
    { id: "elastic-limit", l: 33, vi: "Giới hạn đàn hồi", en: "elastic limit", ipa: "/ɪˌlæstɪk ˈlɪmɪt/",
      pos: "n", sym: "", unit: "",
      defVi: "Giới hạn mà trong đó vật rắn còn giữ được tính đàn hồi; vượt quá giới hạn này, vật không lấy lại được hình dạng ban đầu.",
      defEn: "The limit within which a solid still behaves elastically; beyond it, the solid does not return to its original shape.",
      exEn: "Hooke's law is valid only up to the elastic limit.", exVi: "Định luật Hooke chỉ đúng trong giới hạn đàn hồi." },
    { id: "tensile-deformation", l: 33, vi: "Biến dạng kéo", en: "tensile deformation", ipa: "/ˈtensaɪl ˌdiːfɔːˈmeɪʃn/",
      pos: "n", sym: "", unit: "",
      defVi: "Biến dạng do cặp lực ngược chiều, vuông góc với bề mặt và hướng ra phía ngoài vật gây ra; vật dài ra.",
      defEn: "Deformation caused by a pair of opposite forces perpendicular to the surface and pointing outwards; the object gets longer.",
      exEn: "A bungee cord undergoes tensile deformation.", exVi: "Dây bungee bị biến dạng kéo." },
    { id: "compressive-deformation", l: 33, vi: "Biến dạng nén", en: "compressive deformation", ipa: "/kəmˈpresɪv ˌdiːfɔːˈmeɪʃn/",
      pos: "n", sym: "", unit: "",
      defVi: "Biến dạng do cặp lực ngược chiều, vuông góc với bề mặt và hướng vào phía trong vật gây ra; vật ngắn lại.",
      defEn: "Deformation caused by a pair of opposite forces perpendicular to the surface and pointing inwards; the object gets shorter.",
      exEn: "The columns of a building undergo compressive deformation.", exVi: "Các cột của toà nhà bị biến dạng nén." },
    { id: "elastic-force", l: 33, vi: "Lực đàn hồi", en: "elastic force", ipa: "/ɪˌlæstɪk ˈfɔːs/",
      pos: "n", sym: "F_{đh}", unit: "N",
      defVi: "Lực xuất hiện khi vật bị biến dạng đàn hồi, chống lại nguyên nhân gây biến dạng và có xu hướng đưa vật về hình dạng, kích thước ban đầu.",
      defEn: "The force that appears when an object is elastically deformed; it opposes the cause of the deformation and tends to restore the original shape and size.",
      exEn: "The elastic force of the spring pulls the mass back up.", exVi: "Lực đàn hồi của lò xo kéo vật nặng trở lên." },
    { id: "hookes-law", l: 33, vi: "Định luật Hooke", en: "Hooke's law", ipa: "/ˈhʊks lɔː/",
      pos: "n", sym: "F_{đh} = k|Δℓ|", unit: "",
      defVi: "Trong giới hạn đàn hồi, độ lớn lực đàn hồi của lò xo tỉ lệ thuận với độ biến dạng của lò xo.",
      defEn: "Within the elastic limit, the size of the elastic force of a spring is directly proportional to its change in length.",
      exEn: "A spring balance works because springs obey Hooke's law.", exVi: "Lực kế lò xo hoạt động được vì lò xo tuân theo định luật Hooke." },
    { id: "spring-constant", l: 33, vi: "Độ cứng (hệ số đàn hồi) của lò xo", en: "spring constant", ipa: "/ˈsprɪŋ ˌkɒnstənt/",
      pos: "n", sym: "k", unit: "N/m",
      defVi: "Hằng số k trong định luật Hooke; phụ thuộc kích thước, hình dạng và vật liệu lò xo. Lò xo có k càng lớn thì càng khó biến dạng.",
      defEn: "The constant k in Hooke's law; it depends on the size, shape and material of the spring. The larger k is, the harder the spring is to deform.",
      exEn: "A spring with a spring constant of 100 N/m stretches 1 cm under a 1 N force.", exVi: "Lò xo có độ cứng 100 N/m dãn 1 cm khi chịu lực 1 N." },
    { id: "extension", l: 33, vi: "Độ biến dạng của lò xo", en: "extension", ipa: "/ɪkˈstenʃn/",
      pos: "n", sym: "Δℓ", unit: "m",
      defVi: "Độ thay đổi chiều dài của lò xo: Δℓ = ℓ − ℓ_{0} (dương khi lò xo dãn, âm khi lò xo bị nén).",
      defEn: "The change in length of a spring: Δℓ = ℓ − ℓ_{0} (positive when it is stretched, negative when it is compressed).",
      exEn: "Doubling the load doubles the extension of the spring.", exVi: "Tăng gấp đôi vật treo thì độ biến dạng của lò xo tăng gấp đôi." },
    { id: "natural-length", l: 33, vi: "Chiều dài tự nhiên (chưa biến dạng)", en: "natural length", ipa: "/ˌnætʃrəl ˈleŋθ/",
      pos: "n", sym: "ℓ_{0}", unit: "m",
      defVi: "Chiều dài của lò xo khi chưa bị biến dạng (không chịu lực kéo hay nén).",
      defEn: "The length of a spring when it is not deformed (neither stretched nor compressed).",
      exEn: "The spring has a natural length of 15 cm.", exVi: "Lò xo có chiều dài tự nhiên 15 cm." },
    { id: "shock-absorber", l: 33, vi: "Bộ phận giảm xóc", en: "shock absorber", ipa: "/ˈʃɒk əbˌzɔːbə/",
      pos: "n", sym: "", unit: "",
      defVi: "Bộ phận có lò xo đặt giữa bánh xe và khung xe, làm giảm chấn động khi xe đi trên đường gồ ghề.",
      defEn: "A part containing a spring, fitted between a wheel and the frame of a vehicle, that reduces jolts on bumpy roads.",
      exEn: "Good shock absorbers make a motorbike more comfortable to ride.", exVi: "Bộ giảm xóc tốt giúp đi xe máy êm hơn." },

    /* Bài 34 */
    { id: "density", l: 34, vi: "Khối lượng riêng", en: "density", ipa: "/ˈdensəti/",
      pos: "n", sym: "ρ", unit: "kg/m³",
      defVi: "Khối lượng của một đơn vị thể tích chất: ρ = m/V.",
      defEn: "The mass of a unit volume of a substance: ρ = m/V.",
      exEn: "Mercury has a much greater density than water.", exVi: "Thuỷ ngân có khối lượng riêng lớn hơn nước nhiều." },
    { id: "normal-force", l: 34, vi: "Áp lực", en: "normal force", ipa: "/ˌnɔːml ˈfɔːs/",
      pos: "n", sym: "F_{N}", unit: "N",
      defVi: "Lực ép có phương vuông góc với mặt bị ép.",
      defEn: "A pressing force that acts perpendicular to the surface it pushes on.",
      exEn: "On a horizontal table, the normal force of a book equals its weight.", exVi: "Trên mặt bàn nằm ngang, áp lực của cuốn sách bằng trọng lượng của nó." },
    { id: "pressure", l: 34, vi: "Áp suất", en: "pressure", ipa: "/ˈpreʃə/",
      pos: "n", sym: "p", unit: "Pa",
      defVi: "Đại lượng bằng độ lớn áp lực chia cho diện tích bị ép: p = F_{N}/S.",
      defEn: "The normal force divided by the area it acts on: p = F_{N}/S.",
      exEn: "A sharp knife cuts well because it produces a large pressure.", exVi: "Dao sắc cắt tốt vì tạo ra áp suất lớn." },
    { id: "pascal", l: 34, vi: "Paxcan", en: "pascal", ipa: "/ˈpæskl/",
      pos: "n", sym: "Pa", unit: "Pa",
      defVi: "Đơn vị đo áp suất trong hệ SI: 1 Pa = 1 N/m².",
      defEn: "The SI unit of pressure: 1 Pa = 1 N/m².",
      exEn: "Atmospheric pressure at sea level is about 100 000 pascals.", exVi: "Áp suất khí quyển ở mực nước biển khoảng 100 000 paxcan." },
    { id: "liquid-pressure", l: 34, vi: "Áp suất chất lỏng", en: "liquid pressure", ipa: "/ˌlɪkwɪd ˈpreʃə/",
      pos: "n", sym: "p", unit: "Pa",
      defVi: "Áp suất do chất lỏng gây ra lên mọi vật ở trong nó, tác dụng theo mọi hướng; tại độ sâu h: p = p_{a} + ρ.g.h.",
      defEn: "The pressure a liquid exerts on everything in it, acting in all directions; at depth h: p = p_{a} + ρ.g.h.",
      exEn: "Liquid pressure increases with depth.", exVi: "Áp suất chất lỏng tăng theo độ sâu." },
    { id: "atmospheric-pressure", l: 34, vi: "Áp suất khí quyển", en: "atmospheric pressure", ipa: "/ˌætməsˌferɪk ˈpreʃə/",
      pos: "n", sym: "p_{a}", unit: "Pa",
      defVi: "Áp suất do lớp không khí bao quanh Trái Đất gây ra; ở mực nước biển khoảng 1.10^{5} Pa.",
      defEn: "The pressure caused by the air around the Earth; about 1 × 10^{5} Pa at sea level.",
      exEn: "Atmospheric pressure acts on the free surface of the lake.", exVi: "Áp suất khí quyển tác dụng lên mặt thoáng của hồ nước." },
    { id: "free-surface", l: 34, vi: "Mặt thoáng", en: "free surface", ipa: "/ˌfriː ˈsɜːfɪs/",
      pos: "n", sym: "", unit: "",
      defVi: "Mặt trên của chất lỏng, tiếp xúc với không khí; độ sâu h được tính từ mặt thoáng.",
      defEn: "The top surface of a liquid, in contact with the air; depth h is measured from it.",
      exEn: "The free surface of water at rest is horizontal.", exVi: "Mặt thoáng của nước đứng yên nằm ngang." },
    { id: "depth", l: 34, vi: "Độ sâu", en: "depth", ipa: "/depθ/",
      pos: "n", sym: "h", unit: "m",
      defVi: "Khoảng cách theo phương thẳng đứng từ mặt thoáng chất lỏng đến điểm đang xét.",
      defEn: "The vertical distance from the free surface of a liquid down to the point being considered.",
      exEn: "At a depth of 10 m the water pressure is about one extra atmosphere.", exVi: "Ở độ sâu 10 m, áp suất nước tăng thêm khoảng một lần áp suất khí quyển." },
    { id: "fluid", l: 34, vi: "Chất lưu", en: "fluid", ipa: "/ˈfluːɪd/",
      pos: "n", sym: "", unit: "",
      defVi: "Chất có thể chảy được, gồm chất lỏng và chất khí.",
      defEn: "A substance that can flow: a liquid or a gas.",
      exEn: "Water and air are both fluids.", exVi: "Nước và không khí đều là chất lưu." },
    { id: "hydrostatic-equation", l: 34, vi: "Phương trình cơ bản của chất lưu đứng yên", en: "basic equation for a fluid at rest", ipa: "",
      pos: "n", sym: "Δp = ρ.g.Δh", unit: "",
      defVi: "Hệ thức Δp = ρ.g.Δh: độ chênh lệch áp suất giữa hai điểm trong chất lưu đứng yên tỉ lệ với độ chênh lệch độ sâu (còn gọi là phương trình cơ bản của thuỷ tĩnh học).",
      defEn: "The relation Δp = ρ.g.Δh: the pressure difference between two points in a fluid at rest is proportional to their difference in depth (also called the basic equation of hydrostatics).",
      exEn: "The basic equation for a fluid at rest explains why dams are thicker at the bottom.", exVi: "Phương trình cơ bản của chất lưu đứng yên giải thích vì sao đập nước dày hơn ở phía dưới." }
  ],

  quiz: {
    minutes: 25,
    mcq: [
      { l: 33,
        q: { vi: "Biến dạng đàn hồi là biến dạng mà", en: "An elastic deformation is one in which" },
        o: [
          { vi: "vật bị gãy khi thôi chịu lực.", en: "the object breaks when the force is removed." },
          { vi: "vật giữ nguyên hình dạng mới khi thôi chịu lực.", en: "the object keeps its new shape when the force is removed." },
          { vi: "vật lấy lại hình dạng, kích thước ban đầu khi thôi chịu lực.", en: "the object returns to its original shape and size when the force is removed." },
          { vi: "vật chỉ bị dài ra mà không bị ngắn lại.", en: "the object can only get longer, never shorter." }
        ], a: 2,
        why: { vi: "Theo định nghĩa: vật lấy lại hình dạng và kích thước ban đầu khi không còn ngoại lực.", en: "By definition: the object returns to its original shape and size when the external force is removed." } },
      { l: 33,
        q: { vi: "Dùng hai tay ép hai đầu một lò xo dọc theo trục của nó. Lò xo bị", en: "You push the two ends of a spring towards each other along its axis. The spring undergoes" },
        o: [
          { vi: "biến dạng nén.", en: "compressive deformation." },
          { vi: "biến dạng kéo.", en: "tensile deformation." },
          { vi: "biến dạng vượt giới hạn đàn hồi.", en: "deformation beyond its elastic limit." },
          { vi: "không biến dạng.", en: "no deformation." }
        ], a: 0,
        why: { vi: "Cặp lực ngược chiều hướng vào phía trong lò xo làm lò xo ngắn lại: biến dạng nén.", en: "A pair of opposite forces pointing into the spring makes it shorter: compressive deformation." } },
      { l: 33,
        q: { vi: "Theo định luật Hooke, trong giới hạn đàn hồi, độ lớn lực đàn hồi của lò xo", en: "According to Hooke's law, within the elastic limit, the size of the elastic force of a spring" },
        o: [
          { vi: "tỉ lệ nghịch với độ biến dạng.", en: "is inversely proportional to its change in length." },
          { vi: "tỉ lệ thuận với chiều dài của lò xo.", en: "is directly proportional to the length of the spring." },
          { vi: "không phụ thuộc vào độ biến dạng.", en: "does not depend on the change in length." },
          { vi: "tỉ lệ thuận với độ biến dạng.", en: "is directly proportional to the change in length." }
        ], a: 3,
        why: { vi: "F_{đh} = k|Δℓ|: tỉ lệ với độ biến dạng |ℓ − ℓ_{0}|, không phải với chiều dài ℓ.", en: "F_{đh} = k|Δℓ|: proportional to the change in length |ℓ − ℓ_{0}|, not to the length ℓ itself." } },
      { l: 33,
        q: { vi: "Một lò xo có độ cứng 80 N/m bị kéo bởi lực 4 N (trong giới hạn đàn hồi). Độ dãn của lò xo là", en: "A spring with a spring constant of 80 N/m is pulled by a 4 N force (within the elastic limit). Its extension is" },
        o: [
          { vi: "2 cm.", en: "2 cm." },
          { vi: "5 cm.", en: "5 cm." },
          { vi: "20 cm.", en: "20 cm." },
          { vi: "320 cm.", en: "320 cm." }
        ], a: 1,
        why: { vi: "|Δℓ| = F/k = 4/80 = 0,05 m = 5 cm.", en: "|Δℓ| = F/k = 4/80 = 0.05 m = 5 cm." } },
      { l: 34,
        q: { vi: "Nhôm có khối lượng riêng 2,7 g/cm³. Đổi sang đơn vị SI, giá trị này bằng", en: "Aluminium has a density of 2.7 g/cm³. In SI units this is" },
        o: [
          { vi: "2,7 kg/m³.", en: "2.7 kg/m³." },
          { vi: "27 kg/m³.", en: "27 kg/m³." },
          { vi: "2 700 kg/m³.", en: "2700 kg/m³." },
          { vi: "270 000 kg/m³.", en: "270 000 kg/m³." }
        ], a: 2,
        why: { vi: "1 g/cm³ = 1 000 kg/m³ nên 2,7 g/cm³ = 2 700 kg/m³.", en: "1 g/cm³ = 1000 kg/m³, so 2.7 g/cm³ = 2700 kg/m³." } },
      { l: 34,
        q: { vi: "Áp lực là", en: "A normal force (áp lực) is" },
        o: [
          { vi: "lực ép có phương vuông góc với mặt bị ép.", en: "a pressing force perpendicular to the surface it acts on." },
          { vi: "lực ép có phương song song với mặt bị ép.", en: "a pressing force parallel to the surface it acts on." },
          { vi: "lực tác dụng lên một đơn vị diện tích.", en: "the force acting on a unit area." },
          { vi: "trọng lượng của một đơn vị thể tích.", en: "the weight of a unit volume." }
        ], a: 0,
        why: { vi: "Áp lực là lực ép vuông góc với mặt bị ép. “Lực trên một đơn vị diện tích” là áp suất.", en: "A normal force presses perpendicular to the surface. 'Force per unit area' is pressure." } },
      { l: 34,
        q: { vi: "Một hộp nặng 60 N đặt trên mặt bàn nằm ngang, diện tích tiếp xúc 0,02 m². Áp suất hộp tác dụng lên mặt bàn là", en: "A box weighing 60 N rests on a horizontal table with a contact area of 0.02 m². The pressure it exerts on the table is" },
        o: [
          { vi: "1,2 Pa.", en: "1.2 Pa." },
          { vi: "300 Pa.", en: "300 Pa." },
          { vi: "1 200 Pa.", en: "1200 Pa." },
          { vi: "3 000 Pa.", en: "3000 Pa." }
        ], a: 3,
        why: { vi: "Trên mặt ngang, F_{N} = P = 60 N; p = F_{N}/S = 60/0,02 = 3 000 Pa.", en: "On a horizontal surface F_{N} = P = 60 N; p = F_{N}/S = 60/0.02 = 3000 Pa." } },
      { l: 34,
        q: { vi: "Áp suất do chất lỏng đứng yên gây ra tại một điểm KHÔNG phụ thuộc vào", en: "The pressure due to a liquid at rest at a point does NOT depend on" },
        o: [
          { vi: "độ sâu của điểm đó.", en: "the depth of the point." },
          { vi: "khối lượng riêng của chất lỏng.", en: "the density of the liquid." },
          { vi: "diện tích đáy bình chứa.", en: "the base area of the container." },
          { vi: "gia tốc trọng trường.", en: "the acceleration of free fall." }
        ], a: 2,
        why: { vi: "p = ρ.g.h chỉ phụ thuộc ρ, g và h, không phụ thuộc hình dạng hay diện tích đáy bình.", en: "p = ρ.g.h depends only on ρ, g and h, not on the shape or base area of the container." } },
      { l: 34,
        q: { vi: "Hai điểm trong nước đứng yên có độ sâu chênh nhau 5 m. Lấy ρ = 1 000 kg/m³, g = 9,8 m/s². Độ chênh lệch áp suất giữa hai điểm là", en: "Two points in still water differ in depth by 5 m. Take ρ = 1000 kg/m³ and g = 9.8 m/s². The pressure difference between them is" },
        o: [
          { vi: "4 900 Pa.", en: "4900 Pa." },
          { vi: "49 000 Pa.", en: "49 000 Pa." },
          { vi: "5 000 Pa.", en: "5000 Pa." },
          { vi: "490 000 Pa.", en: "490 000 Pa." }
        ], a: 1,
        why: { vi: "Δp = ρ.g.Δh = 1 000 × 9,8 × 5 = 49 000 Pa.", en: "Δp = ρ.g.Δh = 1000 × 9.8 × 5 = 49 000 Pa." } },
      { l: 33,
        q: { vi: "Thuật ngữ tiếng Anh của 'giới hạn đàn hồi' là gì?", en: "Which English term means 'giới hạn đàn hồi'?" },
        o: [
          { vi: "elastic force", en: "elastic force" },
          { vi: "elastic deformation", en: "elastic deformation" },
          { vi: "spring constant", en: "spring constant" },
          { vi: "elastic limit", en: "elastic limit" }
        ], a: 3,
        why: { vi: "Elastic limit = giới hạn đàn hồi; elastic force = lực đàn hồi; elastic deformation = biến dạng đàn hồi; spring constant = độ cứng.", en: "Elastic limit = giới hạn đàn hồi; elastic force = lực đàn hồi; elastic deformation = biến dạng đàn hồi; spring constant = độ cứng." } }
    ],
    tf: [
      { l: 33,
        stem: { vi: "Một lò xo nhẹ có chiều dài tự nhiên 20 cm, treo thẳng đứng. Móc vào đầu dưới một vật 200 g thì khi cân bằng lò xo dài 24 cm. Lấy g = 10 m/s²; coi lò xo luôn ở trong giới hạn đàn hồi.", en: "A light spring with a natural length of 20 cm hangs vertically. When a 200 g mass is hung on it, the spring is 24 cm long at equilibrium. Take g = 10 m/s² and assume the spring stays within its elastic limit." },
        items: [
          { s: { vi: "Độ biến dạng của lò xo là 4 cm.", en: "The extension of the spring is 4 cm." }, a: true,
            why: { vi: "Δℓ = ℓ − ℓ_{0} = 24 − 20 = 4 cm.", en: "Δℓ = ℓ − ℓ_{0} = 24 − 20 = 4 cm." } },
          { s: { vi: "Khi cân bằng, lực đàn hồi của lò xo có độ lớn 2 N.", en: "At equilibrium the elastic force of the spring is 2 N." }, a: true,
            why: { vi: "F_{đh} = P = m.g = 0,2 × 10 = 2 N.", en: "F_{đh} = P = m.g = 0.2 × 10 = 2 N." } },
          { s: { vi: "Độ cứng của lò xo là 0,5 N/m.", en: "The spring constant is 0.5 N/m." }, a: false,
            why: { vi: "k = F/|Δℓ| = 2/0,04 = 50 N/m (phải đổi 4 cm = 0,04 m).", en: "k = F/|Δℓ| = 2/0.04 = 50 N/m (4 cm must be converted to 0.04 m)." } },
          { s: { vi: "Nếu thay bằng vật 300 g thì khi cân bằng lò xo dài 26 cm.", en: "With a 300 g mass instead, the spring is 26 cm long at equilibrium." }, a: true,
            why: { vi: "Δℓ = m.g/k = 3/50 = 0,06 m = 6 cm ⇒ ℓ = 20 + 6 = 26 cm.", en: "Δℓ = m.g/k = 3/50 = 0.06 m = 6 cm ⇒ ℓ = 20 + 6 = 26 cm." } }
        ] },
      { l: 34,
        stem: { vi: "Một bể nước đứng yên sâu 2 m. Lấy ρ = 1 000 kg/m³, g = 9,8 m/s², áp suất khí quyển p_{a} = 1,0.10^{5} Pa.", en: "A tank holds still water 2 m deep. Take ρ = 1000 kg/m³, g = 9.8 m/s² and atmospheric pressure p_{a} = 1.0 × 10^{5} Pa." },
        items: [
          { s: { vi: "Áp suất do riêng nước gây ra ở đáy bể là 19 600 Pa.", en: "The pressure due to the water alone at the bottom is 19 600 Pa." }, a: true,
            why: { vi: "ρ.g.h = 1 000 × 9,8 × 2 = 19 600 Pa.", en: "ρ.g.h = 1000 × 9.8 × 2 = 19 600 Pa." } },
          { s: { vi: "Áp suất toàn phần ở đáy bể xấp xỉ 1,2.10^{5} Pa.", en: "The total pressure at the bottom is about 1.2 × 10^{5} Pa." }, a: true,
            why: { vi: "p = p_{a} + ρ.g.h = 100 000 + 19 600 = 119 600 Pa ≈ 1,2.10^{5} Pa.", en: "p = p_{a} + ρ.g.h = 100 000 + 19 600 = 119 600 Pa ≈ 1.2 × 10^{5} Pa." } },
          { s: { vi: "Áp suất tại một điểm trên thành bể cách mặt thoáng 1 m nhỏ hơn áp suất tại điểm ở giữa bể có cùng độ sâu.", en: "The pressure at a point on the side wall 1 m below the free surface is smaller than at a point in the middle of the tank at the same depth." }, a: false,
            why: { vi: "Hai điểm cùng độ sâu (Δh = 0) nên Δp = 0: áp suất bằng nhau; chất lỏng truyền áp suất theo mọi hướng.", en: "Both points are at the same depth (Δh = 0), so Δp = 0: the pressures are equal; liquids transmit pressure in all directions." } },
          { s: { vi: "Nếu dùng một bể rộng gấp đôi nhưng nước vẫn sâu 2 m thì áp suất do nước gây ra ở đáy tăng gấp đôi.", en: "If a tank twice as wide is used but the water is still 2 m deep, the pressure due to the water at the bottom doubles." }, a: false,
            why: { vi: "p = ρ.g.h chỉ phụ thuộc độ sâu, không phụ thuộc lượng nước hay diện tích đáy.", en: "p = ρ.g.h depends only on the depth, not on the amount of water or the base area." } }
        ] }
    ],
    short: [
      { l: 33,
        q: { vi: "Một lò xo có chiều dài tự nhiên 20 cm và độ cứng 50 N/m được treo thẳng đứng. Treo vào đầu dưới một vật 150 g, lấy g = 10 m/s². Tính chiều dài của lò xo (cm) khi vật cân bằng.", en: "A spring with a natural length of 20 cm and a spring constant of 50 N/m hangs vertically. A 150 g mass is hung on it; take g = 10 m/s². Find the length of the spring (in cm) at equilibrium." },
        ans: "23", tol: 0.1, unit: "cm",
        why: { vi: "F_{đh} = m.g = 0,15 × 10 = 1,5 N; Δℓ = F/k = 1,5/50 = 0,03 m = 3 cm; ℓ = 20 + 3 = 23 cm.", en: "F_{đh} = m.g = 0.15 × 10 = 1.5 N; Δℓ = F/k = 1.5/50 = 0.03 m = 3 cm; ℓ = 20 + 3 = 23 cm." } },
      { l: 34,
        q: { vi: "Tính áp suất toàn phần (kPa) tại độ sâu 15 m dưới mặt một hồ nước. Lấy ρ = 1 000 kg/m³, g = 9,8 m/s², áp suất khí quyển p_{a} = 1,01.10^{5} Pa.", en: "Find the total pressure (in kPa) at a depth of 15 m below the surface of a lake. Take ρ = 1000 kg/m³, g = 9.8 m/s² and atmospheric pressure p_{a} = 1.01 × 10^{5} Pa." },
        ans: "248", tol: 1, unit: "kPa",
        why: { vi: "p = p_{a} + ρ.g.h = 101 000 + 1 000 × 9,8 × 15 = 101 000 + 147 000 = 248 000 Pa = 248 kPa.", en: "p = p_{a} + ρ.g.h = 101 000 + 1000 × 9.8 × 15 = 101 000 + 147 000 = 248 000 Pa = 248 kPa." } }
    ]
  }
});
