/* Chương VI – Chuyển động tròn (SGK Vật lí 10 KNTT, tr.119–126) */
P10.addChapter({
  chapter: { n: 6, vi: "Chuyển động tròn đều", en: "Uniform circular motion", page: 119 },

  lessons: [
    /* ============================== BÀI 31 ============================== */
    {
      n: 31, vi: "Động học của chuyển động tròn đều", en: "Kinematics of uniform circular motion",
      pages: "120–122",
      practical: false,
      intro: {
        vi: "Khi một chiếc mô tô đua ôm cua, bánh xe quay tròn quanh trục còn cả chiếc xe đi theo một cung tròn. Làm thế nào để xác định vị trí và mô tả mức độ nhanh, chậm của những chuyển động như vậy?",
        en: "When a racing motorbike leans into a bend, its wheels turn around their axles and the whole bike follows an arc of a circle. How can we describe the position of such objects and how fast they move?"
      },
      goals: [
        { vi: "Biểu diễn được độ dịch chuyển góc theo đơn vị rađian.", en: "Express angular displacement in radians." },
        { vi: "Nêu được định nghĩa chuyển động tròn đều, tốc độ và tốc độ góc; vận dụng υ = ω.r để giải bài tập.", en: "Define uniform circular motion, speed and angular speed, and use υ = ω.r to solve problems." },
        { vi: "Mô tả được hướng và độ lớn của vận tốc tức thời trong chuyển động tròn đều.", en: "Describe the direction and magnitude of the instantaneous velocity in uniform circular motion." }
      ],
      blocks: [
        { t: "h", vi: "I. Mô tả chuyển động tròn", en: "I. Describing circular motion" },
        { t: "p",
          vi: "Cánh quạt, kim đồng hồ, đu quay… đều thực hiện [[circular-motion|chuyển động tròn]]. Để xác định vị trí của vật, ta có thể dùng quãng đường đi được s, tức [[arc-length|độ dài cung tròn]] tính từ vị trí ban đầu, hoặc dùng [[angular-displacement|độ dịch chuyển góc]] θ.",
          en: "Fan blades, clock hands and Ferris wheels all show [[circular-motion|circular motion]]. To locate the object we can use the distance travelled s, which is the [[arc-length|arc length]] measured from the starting position, or the [[angular-displacement|angular displacement]] θ." },
        { t: "p",
          vi: "Khi vật đi từ A đến B trên đường tròn tâm O, độ dịch chuyển góc là góc ở tâm θ chắn cung AB có độ dài s (Hình 31.1). Liên hệ giữa độ dài cung, góc ở tâm và bán kính đã biết trong Toán học:",
          en: "When the object moves from A to B on a circle with centre O, its angular displacement is the angle θ subtended at the centre by the arc AB of length s (Figure 31.1). From mathematics we know how arc length, the angle at the centre and the radius are related:" },
        { t: "f", f: "θ = s/r", no: "31.1",
          vi: "Tính độ dịch chuyển góc khi biết quãng đường đi trên cung tròn và bán kính.",
          en: "Use it to find the angular displacement from the arc length and the radius.",
          sym: [
            { s: "θ", vi: "độ dịch chuyển góc", en: "angular displacement", u: "rad" },
            { s: "s", vi: "quãng đường đi (độ dài cung)", en: "distance travelled (arc length)", u: "m" },
            { s: "r", vi: "bán kính quỹ đạo", en: "radius of the path", u: "m" }
          ] },
        { t: "law", name: { vi: "Rađian", en: "The radian" },
          vi: "Một [[radian|rađian]] (1 rad) là góc ở tâm chắn cung có độ dài bằng bán kính đường tròn.",
          en: "One [[radian|radian]] (1 rad) is the angle subtended at the centre of a circle by an arc whose length equals the radius." },
        { t: "f", f: "360° = 2.π rad ;  180° = π rad", no: "",
          vi: "Khi vật đi hết một vòng, s = 2.π.r nên θ = 2.π rad. Dùng để đổi độ sang rađian và ngược lại.",
          en: "In one full turn s = 2.π.r, so θ = 2.π rad. Use it to convert between degrees and radians.",
          sym: [] },
        { t: "ex",
          vi: { q: "Kim giờ của đồng hồ quay từ lúc 12 giờ đến lúc 15 giờ 30 phút. Tìm độ dịch chuyển góc của kim (theo độ và rađian).",
                a: "Kim giờ quay 360° trong 12 h, tức 30° mỗi giờ (= π/6 rad).\nTừ 12 h đến 15 h 30 min: Δt = 3,5 h.\nθ = 3,5 × 30° = 105°.\nθ = 105 × π/180 = 7π/12 ≈ 1,83 rad." },
          en: { q: "The hour hand of a clock turns from 12:00 to 15:30. Find its angular displacement in degrees and in radians.",
                a: "The hour hand turns 360° in 12 h, i.e. 30° per hour (= π/6 rad).\nFrom 12:00 to 15:30: Δt = 3.5 h.\nθ = 3.5 × 30° = 105°.\nθ = 105 × π/180 = 7π/12 ≈ 1.83 rad." } },

        { t: "h", vi: "II. Chuyển động tròn đều. Tốc độ và tốc độ góc", en: "II. Uniform circular motion. Speed and angular speed" },
        { t: "law", name: { vi: "Chuyển động tròn đều", en: "Uniform circular motion" },
          vi: "[[uniform-circular-motion|Chuyển động tròn đều]] là chuyển động có quỹ đạo tròn và tốc độ không đổi.",
          en: "[[uniform-circular-motion|Uniform circular motion]] is motion along a circular path at constant speed." },
        { t: "f", f: { vi: "υ = s/t = hằng số", en: "υ = s/t = constant" }, no: "31.2",
          vi: "Tốc độ trong chuyển động tròn đều được tính như trong chuyển động thẳng và không đổi theo thời gian.",
          en: "Speed in uniform circular motion is calculated as in straight-line motion and stays constant.",
          sym: [
            { s: "υ", vi: "tốc độ", en: "speed", u: "m/s" },
            { s: "s", vi: "quãng đường đi được", en: "distance travelled", u: "m" },
            { s: "t", vi: "thời gian", en: "time", u: "s" }
          ] },
        { t: "p",
          vi: "Để cho biết vật quay nhanh hay chậm, ta dùng [[angular-speed|tốc độ góc]] ω: trong chuyển động tròn đều, tốc độ góc bằng độ dịch chuyển góc chia cho thời gian dịch chuyển. Đơn vị thường dùng là rad/s.",
          en: "To show how fast an object turns we use its [[angular-speed|angular speed]] ω: in uniform circular motion it equals the angular displacement divided by the time taken. Its usual unit is rad/s." },
        { t: "f", f: "ω = θ/t", no: "31.3",
          vi: "Tính tốc độ góc từ độ dịch chuyển góc và thời gian.",
          en: "Use it to find the angular speed from the angular displacement and the time.",
          sym: [
            { s: "ω", vi: "tốc độ góc", en: "angular speed", u: "rad/s" },
            { s: "θ", vi: "độ dịch chuyển góc", en: "angular displacement", u: "rad" },
            { s: "t", vi: "thời gian", en: "time", u: "s" }
          ] },
        { t: "f", f: "υ = ω.r", no: "31.4",
          vi: "Suy ra từ (31.1) và (31.2): liên hệ giữa tốc độ, tốc độ góc và bán kính quỹ đạo.",
          en: "Derived from (31.1) and (31.2): it links speed, angular speed and the radius of the path.",
          sym: [
            { s: "υ", vi: "tốc độ", en: "speed", u: "m/s" },
            { s: "ω", vi: "tốc độ góc", en: "angular speed", u: "rad/s" },
            { s: "r", vi: "bán kính quỹ đạo", en: "radius of the path", u: "m" }
          ] },
        { t: "note",
          vi: "Mọi điểm trên kim giây quay đều đều có cùng tốc độ góc (cùng quét một góc trong cùng thời gian), nhưng điểm càng xa trục quay thì tốc độ càng lớn vì υ = ω.r.",
          en: "All points on a steadily turning second hand have the same angular speed (they sweep the same angle in the same time), but points further from the axis have a greater speed because υ = ω.r." },
        { t: "p",
          vi: "Trong chuyển động tròn đều còn dùng [[period|chu kì]] T – thời gian vật quay hết một vòng – và [[frequency|tần số]] f – số vòng vật đi được trong một giây, đơn vị là héc (Hz).",
          en: "Uniform circular motion is also described by the [[period|period]] T – the time for one complete turn – and the [[frequency|frequency]] f – the number of turns per second, measured in hertz (Hz)." },
        { t: "f", f: "T = 1/f = 2.π/ω", no: "",
          vi: "Liên hệ giữa chu kì, tần số và tốc độ góc (mục “Em có biết?”).",
          en: "The link between period, frequency and angular speed (from the “Did you know?” box).",
          sym: [
            { s: "T", vi: "chu kì", en: "period", u: "s" },
            { s: "f", vi: "tần số", en: "frequency", u: "Hz" },
            { s: "ω", vi: "tốc độ góc", en: "angular speed", u: "rad/s" }
          ] },
        { t: "ex",
          vi: { q: "Roto trong một tổ máy của nhà máy thuỷ điện Hoà Bình quay 125 vòng mỗi phút. Tính tốc độ góc của roto theo rad/s.",
                a: "Mỗi vòng ứng với 2.π rad; 1 phút = 60 s.\nω = 125.2.π/60 ≈ 13,1 rad/s." },
          en: { q: "The rotor of a generator at the Hoa Binh hydroelectric power station makes 125 revolutions per minute. Find its angular speed in rad/s.",
                a: "Each revolution is 2.π rad; 1 minute = 60 s.\nω = 125.2.π/60 ≈ 13.1 rad/s." } },
        { t: "ex",
          vi: { q: "Một điểm nằm trên đường xích đạo quay cùng Trái Đất. Bán kính Trái Đất ở xích đạo là 6 400 km. Tính chu kì, tốc độ góc và tốc độ của điểm đó.",
                a: "Trái Đất tự quay một vòng mất 24 h: T = 24 h = 86 400 s.\nω = 2.π/T ≈ 7,27.10^{-5} rad/s.\nυ = ω.r = 7,27.10^{-5} × 6,4.10^{6} ≈ 465 m/s." },
          en: { q: "A point on the equator turns with the Earth. The Earth's radius at the equator is 6400 km. Find the period, the angular speed and the speed of the point.",
                a: "The Earth makes one turn in 24 h: T = 24 h = 86 400 s.\nω = 2.π/T ≈ 7.27 × 10^{-5} rad/s.\nυ = ω.r = 7.27 × 10^{-5} × 6.4 × 10^{6} ≈ 465 m/s." } },

        { t: "h", vi: "III. Vận tốc trong chuyển động tròn đều", en: "III. Velocity in uniform circular motion" },
        { t: "p",
          vi: "Ta biết [[instantaneous-velocity|vận tốc tức thời]] là vec{v} = Δvec{d}/Δt. Khi Δt rất nhỏ, vectơ độ dịch chuyển Δvec{d} gần như trùng với [[tangent|tiếp tuyến]] của đường tròn. Vì vậy, tại mỗi thời điểm, vectơ vận tốc tức thời có phương tiếp tuyến với quỹ đạo (Hình 31.2).",
          en: "The [[instantaneous-velocity|instantaneous velocity]] is vec{v} = Δvec{d}/Δt. When Δt is very small, the displacement vector Δvec{d} almost lies along the [[tangent|tangent]] to the circle. So at every instant the velocity vector is along the tangent to the path (Figure 31.2)." },
        { t: "law", name: { vi: "Vận tốc trong chuyển động tròn đều", en: "Velocity in uniform circular motion" },
          vi: "Trong chuyển động tròn đều, độ lớn của vận tốc tức thời không đổi nhưng hướng của nó luôn thay đổi.",
          en: "In uniform circular motion, the magnitude of the instantaneous velocity is constant but its direction keeps changing." },
        { t: "note",
          vi: "Phân biệt: tốc độ là một số (không đổi trong chuyển động tròn đều); vận tốc là vectơ (luôn đổi hướng). Ví dụ, xe đồ chơi chạy đều 0,2 m/s trên đường ray tròn, đi từ đầu A đến đầu B của một đường kính thì vận tốc có cùng độ lớn 0,2 m/s nhưng đã đổi sang hướng ngược lại.",
          en: "Do not mix them up: speed is a number (constant in uniform circular motion); velocity is a vector (its direction keeps changing). For example, a toy train moving at a steady 0.2 m/s on a circular track from end A to end B of a diameter still has a velocity of 0.2 m/s, but now in the opposite direction." }
      ],
      summary: [
        { vi: "Chuyển động của vật theo quỹ đạo tròn với tốc độ không đổi gọi là chuyển động tròn đều.", en: "Motion along a circular path at constant speed is called uniform circular motion." },
        { vi: "Một rađian là góc ở tâm chắn cung có độ dài bằng bán kính; θ = s/r, 360° = 2.π rad.", en: "One radian is the angle subtended at the centre by an arc equal in length to the radius; θ = s/r and 360° = 2.π rad." },
        { vi: "Tốc độ góc ω = θ/t (rad/s); tốc độ, tốc độ góc và bán kính liên hệ theo υ = ω.r.", en: "Angular speed ω = θ/t (rad/s); speed, angular speed and radius are linked by υ = ω.r." },
        { vi: "Chu kì và tần số: T = 1/f = 2.π/ω.", en: "Period and frequency: T = 1/f = 2.π/ω." },
        { vi: "Trong chuyển động tròn đều, vận tốc tiếp tuyến với quỹ đạo, có độ lớn không đổi nhưng hướng luôn thay đổi.", en: "In uniform circular motion the velocity is tangent to the path; its magnitude is constant but its direction keeps changing." }
      ],
      check: [
        { q: { vi: "Chuyển động tròn đều là chuyển động có", en: "Uniform circular motion is motion with" },
          o: [
            { vi: "quỹ đạo tròn và vận tốc không đổi.", en: "a circular path and constant velocity." },
            { vi: "quỹ đạo tròn và gia tốc bằng không.", en: "a circular path and zero acceleration." },
            { vi: "quỹ đạo tròn và tốc độ không đổi.", en: "a circular path and constant speed." },
            { vi: "quỹ đạo bất kì và tốc độ góc không đổi.", en: "any path and constant angular speed." }
          ], a: 2,
          why: { vi: "Theo định nghĩa: quỹ đạo tròn, tốc độ không đổi. Vận tốc thì luôn đổi hướng nên không phải là không đổi.", en: "By definition: a circular path at constant speed. The velocity keeps changing direction, so it is not constant." } },
        { q: { vi: "Thuật ngữ tiếng Anh 'angular speed' có nghĩa là gì?", en: "What is the Vietnamese term for 'angular speed'?" },
          o: [
            { vi: "Tốc độ góc", en: "Tốc độ góc" },
            { vi: "Độ dịch chuyển góc", en: "Độ dịch chuyển góc" },
            { vi: "Tần số", en: "Tần số" },
            { vi: "Gia tốc góc", en: "Gia tốc góc" }
          ], a: 0,
          why: { vi: "Angular speed = tốc độ góc (ω), đơn vị rad/s. Angular displacement = độ dịch chuyển góc.", en: "Angular speed = tốc độ góc (ω), unit rad/s. Angular displacement = độ dịch chuyển góc." } },
        { q: { vi: "Kim giây đồng hồ quay đều. Điểm A ở gần trục, điểm B ở đầu kim. So sánh nào đúng?", en: "A second hand turns steadily. Point A is near the axis and point B is at the tip. Which comparison is correct?" },
          o: [
            { vi: "ω_{A} < ω_{B} và υ_{A} = υ_{B}.", en: "ω_{A} < ω_{B} and υ_{A} = υ_{B}." },
            { vi: "ω_{A} = ω_{B} và υ_{A} = υ_{B}.", en: "ω_{A} = ω_{B} and υ_{A} = υ_{B}." },
            { vi: "ω_{A} > ω_{B} và υ_{A} > υ_{B}.", en: "ω_{A} > ω_{B} and υ_{A} > υ_{B}." },
            { vi: "ω_{A} = ω_{B} và υ_{A} < υ_{B}.", en: "ω_{A} = ω_{B} and υ_{A} < υ_{B}." }
          ], a: 3,
          why: { vi: "Hai điểm quét cùng một góc trong cùng thời gian nên ω bằng nhau; vì υ = ω.r và r_{B} > r_{A} nên υ_{B} > υ_{A}.", en: "Both points sweep the same angle in the same time, so ω is the same; since υ = ω.r and r_{B} > r_{A}, υ_{B} > υ_{A}." } },
        { q: { vi: "Trong chuyển động tròn đều, vectơ vận tốc tức thời", en: "In uniform circular motion, the instantaneous velocity vector" },
          o: [
            { vi: "luôn hướng vào tâm quỹ đạo.", en: "always points towards the centre of the path." },
            { vi: "tiếp tuyến với quỹ đạo, có độ lớn không đổi.", en: "is tangent to the path and has a constant magnitude." },
            { vi: "tiếp tuyến với quỹ đạo, có độ lớn tăng dần.", en: "is tangent to the path and its magnitude increases." },
            { vi: "không đổi cả về hướng và độ lớn.", en: "is constant in both direction and magnitude." }
          ], a: 1,
          why: { vi: "Vận tốc tức thời có phương tiếp tuyến với đường tròn; độ lớn (tốc độ) không đổi nhưng hướng luôn thay đổi.", en: "The instantaneous velocity is along the tangent; its magnitude (the speed) is constant but its direction keeps changing." } },
        { q: { vi: "Một vật chuyển động tròn đều trên đường tròn bán kính 0,5 m, trong 2 s quay được góc 6 rad. Tốc độ của vật là", en: "An object moves uniformly on a circle of radius 0.5 m and turns through 6 rad in 2 s. Its speed is" },
          o: [
            { vi: "3 m/s.", en: "3 m/s." },
            { vi: "6 m/s.", en: "6 m/s." },
            { vi: "1,5 m/s.", en: "1.5 m/s." },
            { vi: "0,75 m/s.", en: "0.75 m/s." }
          ], a: 2,
          why: { vi: "ω = θ/t = 6/2 = 3 rad/s; υ = ω.r = 3 × 0,5 = 1,5 m/s.", en: "ω = θ/t = 6/2 = 3 rad/s; υ = ω.r = 3 × 0.5 = 1.5 m/s." } }
      ]
    },

    /* ============================== BÀI 32 ============================== */
    {
      n: 32, vi: "Lực hướng tâm và gia tốc hướng tâm", en: "Centripetal force and centripetal acceleration",
      pages: "123–126",
      practical: false,
      intro: {
        vi: "Vì sao Trái Đất cứ chuyển động quanh Mặt Trời mà không bay thẳng ra xa? Vì sao ở những đoạn đường vòng, xe phải giảm tốc độ và mặt đường thường hơi nghiêng về phía tâm?",
        en: "Why does the Earth keep moving around the Sun instead of flying off in a straight line? Why must vehicles slow down on bends, and why is the road surface often tilted towards the centre?"
      },
      goals: [
        { vi: "Nêu được thế nào là lực hướng tâm và chỉ ra lực nào đóng vai trò lực hướng tâm trong các ví dụ thực tế.", en: "State what a centripetal force is and identify which force provides it in real situations." },
        { vi: "Vận dụng a_{ht} = υ²/r = ω².r và F_{ht} = m.υ²/r = m.ω².r để giải bài tập.", en: "Use a_{ht} = υ²/r = ω².r and F_{ht} = m.υ²/r = m.ω².r to solve problems." },
        { vi: "Giải thích được một số hiện tượng: xe giảm tốc khi vào cua, mặt đường nghiêng, chuyển động li tâm.", en: "Explain everyday effects such as slowing down on bends, banked roads and centrifugal motion." }
      ],
      blocks: [
        { t: "h", vi: "I. Lực hướng tâm", en: "I. Centripetal force" },
        { t: "p",
          vi: "Buộc một cái tẩy vào sợi dây nhẹ, không dãn rồi quay cho tẩy chuyển động tròn trong mặt phẳng nằm ngang (Hình 32.1). Chính [[tension|lực căng dây]] hướng vào tâm giữ cho tẩy đi theo đường tròn. Nếu buông tay, tẩy văng ra theo phương tiếp tuyến với quỹ đạo, theo hướng vận tốc tại điểm đó.",
          en: "Tie an eraser to a light, inextensible string and swing it in a horizontal circle (Figure 32.1). The [[tension|tension]] in the string, pointing towards the centre, keeps the eraser on the circle. If you let go, the eraser flies off along the tangent, in the direction of its velocity at that point." },
        { t: "law", name: { vi: "Lực hướng tâm", en: "Centripetal force" },
          vi: "Lực (hay hợp lực) tác dụng lên vật chuyển động tròn đều và hướng vào tâm quỹ đạo gọi là [[centripetal-force|lực hướng tâm]].",
          en: "The force (or resultant force) acting on an object in uniform circular motion and directed towards the centre of the path is called the [[centripetal-force|centripetal force]]." },
        { t: "note",
          vi: "Lực hướng tâm không phải là một loại lực mới. Đó có thể là lực căng dây, lực hấp dẫn, lực ma sát nghỉ hay hợp lực của nhiều lực – miễn là lực đó hướng vào tâm và giữ vật trên quỹ đạo tròn. Ví dụ: lực hấp dẫn của Mặt Trời duy trì chuyển động của Trái Đất quanh Mặt Trời.",
          en: "Centripetal force is not a new kind of force. It may be a tension, a gravitational force, a static friction force or the resultant of several forces, as long as it points towards the centre and keeps the object on the circle. For example, the Sun's gravitational pull keeps the Earth moving around the Sun." },

        { t: "h", vi: "II. Gia tốc hướng tâm", en: "II. Centripetal acceleration" },
        { t: "p",
          vi: "Trong chuyển động tròn đều, lực hướng tâm gây ra một gia tốc luôn hướng vào tâm quỹ đạo, gọi là [[centripetal-acceleration|gia tốc hướng tâm]] a_{ht}. Gia tốc này không làm thay đổi tốc độ mà chỉ làm thay đổi hướng của vận tốc.",
          en: "In uniform circular motion the centripetal force produces an acceleration that always points towards the centre of the path. It is called the [[centripetal-acceleration|centripetal acceleration]] a_{ht}. It does not change the speed; it only changes the direction of the velocity." },
        { t: "f", f: "a_{ht} = υ^{2}/r = ω^{2}.r", no: "32.1",
          vi: "Tính độ lớn gia tốc hướng tâm khi biết tốc độ (hoặc tốc độ góc) và bán kính quỹ đạo.",
          en: "Use it to find the size of the centripetal acceleration from the speed (or angular speed) and the radius.",
          sym: [
            { s: "a_{ht}", vi: "gia tốc hướng tâm", en: "centripetal acceleration", u: "m/s²" },
            { s: "υ", vi: "tốc độ", en: "speed", u: "m/s" },
            { s: "ω", vi: "tốc độ góc", en: "angular speed", u: "rad/s" },
            { s: "r", vi: "bán kính quỹ đạo", en: "radius of the path", u: "m" }
          ] },
        { t: "p",
          vi: "Công thức được chứng minh trong mục “Em có biết?”: vectơ vận tốc tại A và B có cùng độ lớn υ, chỉ khác hướng. Hai tam giác cân đồng dạng cho Δυ/υ = υ.Δt/r, suy ra a_{ht} = Δυ/Δt = υ²/r; thay υ = ω.r được a_{ht} = ω².r.",
          en: "The “Did you know?” box proves the formula: the velocity vectors at A and B have the same magnitude υ but different directions. Two similar isosceles triangles give Δυ/υ = υ.Δt/r, so a_{ht} = Δυ/Δt = υ²/r; substituting υ = ω.r gives a_{ht} = ω².r." },
        { t: "ex",
          vi: { q: "Một vệ tinh nhân tạo chuyển động tròn đều quanh Trái Đất với bán kính quỹ đạo 7 000 km và tốc độ 7,57 km/s. Tính gia tốc hướng tâm của vệ tinh.",
                a: "Đổi đơn vị: r = 7,0.10^{6} m; υ = 7 570 m/s.\na_{ht} = υ²/r = 7 570²/(7,0.10^{6}) ≈ 8,19 m/s²." },
          en: { q: "An artificial satellite moves uniformly around the Earth in an orbit of radius 7000 km at a speed of 7.57 km/s. Find its centripetal acceleration.",
                a: "Convert units: r = 7.0 × 10^{6} m; υ = 7570 m/s.\na_{ht} = υ²/r = 7570²/(7.0 × 10^{6}) ≈ 8.19 m/s²." } },
        { t: "ex",
          vi: { q: "Coi Mặt Trăng chuyển động tròn đều quanh Trái Đất với bán kính 3,84.10^{8} m và chu kì 27,2 ngày. Tính gia tốc hướng tâm của Mặt Trăng.",
                a: "T = 27,2 × 86 400 s ≈ 2,35.10^{6} s.\nω = 2.π/T ≈ 2,67.10^{-6} rad/s.\na_{ht} = ω².r ≈ (2,67.10^{-6})² × 3,84.10^{8} ≈ 2,74.10^{-3} m/s²." },
          en: { q: "Assume the Moon moves uniformly around the Earth in a circle of radius 3.84 × 10^{8} m with a period of 27.2 days. Find its centripetal acceleration.",
                a: "T = 27.2 × 86 400 s ≈ 2.35 × 10^{6} s.\nω = 2.π/T ≈ 2.67 × 10^{-6} rad/s.\na_{ht} = ω².r ≈ (2.67 × 10^{-6})² × 3.84 × 10^{8} ≈ 2.74 × 10^{-3} m/s²." } },

        { t: "h", vi: "III. Công thức độ lớn lực hướng tâm", en: "III. Magnitude of the centripetal force" },
        { t: "f", f: "F_{ht} = m.a_{ht} = m.υ^{2}/r = m.ω^{2}.r", no: "32.2",
          vi: "Kết hợp định luật 2 Newton với công thức gia tốc hướng tâm để tính lực hướng tâm cần thiết.",
          en: "Combine Newton's second law with the centripetal acceleration formula to find the centripetal force needed.",
          sym: [
            { s: "F_{ht}", vi: "lực hướng tâm", en: "centripetal force", u: "N" },
            { s: "m", vi: "khối lượng của vật", en: "mass of the object", u: "kg" },
            { s: "υ", vi: "tốc độ", en: "speed", u: "m/s" },
            { s: "ω", vi: "tốc độ góc", en: "angular speed", u: "rad/s" },
            { s: "r", vi: "bán kính quỹ đạo", en: "radius of the path", u: "m" }
          ] },
        { t: "p",
          vi: "Vật nhỏ buộc vào dây quay đều và nhanh thì dây gần như nằm ngang, lực căng dây là lực hướng tâm (Hình 32.3). Quay chậm hơn, dây quét thành mặt nón: đó là [[conical-pendulum|con lắc nón]], và hợp lực của lực căng vec{T} với trọng lực vec{P} là lực hướng tâm (Hình 32.4). Với [[artificial-satellite|vệ tinh nhân tạo]], lực hấp dẫn của Trái Đất là lực hướng tâm (Hình 32.5); điều này cũng đúng với [[geostationary-satellite|vệ tinh địa tĩnh]].",
          en: "If a small object on a string is whirled steadily and fast, the string is almost horizontal and its tension is the centripetal force (Figure 32.3). If it turns more slowly, the string traces out a cone: this is a [[conical-pendulum|conical pendulum]], and the resultant of the tension vec{T} and the weight vec{P} is the centripetal force (Figure 32.4). For an [[artificial-satellite|artificial satellite]], the Earth's gravitational force is the centripetal force (Figure 32.5); the same is true for a [[geostationary-satellite|geostationary satellite]]." },
        { t: "ex",
          vi: { q: "Một vệ tinh địa tĩnh nằm trong mặt phẳng xích đạo, có tốc độ góc bằng tốc độ góc tự quay của Trái Đất, ở độ cao 35 780 km so với mặt đất. Lấy bán kính Trái Đất là 6 400 km. Tính gia tốc hướng tâm của vệ tinh.",
                a: "Bán kính quỹ đạo: r = 6 400 + 35 780 = 42 180 km = 4,218.10^{7} m.\nChu kì bằng chu kì tự quay của Trái Đất: T = 24 h = 86 400 s ⇒ ω = 2.π/T ≈ 7,27.10^{-5} rad/s.\na_{ht} = ω².r ≈ (7,27.10^{-5})² × 4,218.10^{7} ≈ 0,223 m/s²." },
          en: { q: "A geostationary satellite lies in the plane of the equator, has the same angular speed as the Earth's rotation and is 35 780 km above the ground. Take the Earth's radius as 6400 km. Find its centripetal acceleration.",
                a: "Orbit radius: r = 6400 + 35 780 = 42 180 km = 4.218 × 10^{7} m.\nIts period equals the Earth's rotation period: T = 24 h = 86 400 s ⇒ ω = 2.π/T ≈ 7.27 × 10^{-5} rad/s.\na_{ht} = ω².r ≈ (7.27 × 10^{-5})² × 4.218 × 10^{7} ≈ 0.223 m/s²." } },
        { t: "ex",
          vi: { q: "Con lắc nón có dây dài ℓ = 0,75 m. Tính tốc độ góc và tần số quay để dây lệch góc α = 60° so với phương thẳng đứng. Lấy g = 9,8 m/s².",
                a: "Bán kính quỹ đạo: r = ℓ.sinα.\nHợp lực của vec{T} và vec{P} nằm ngang, có độ lớn P.tanα = m.g.tanα.\nm.g.tanα = m.ω².ℓ.sinα ⇒ ω² = g/(ℓ.cosα) = 9,8/(0,75 × 0,5) ≈ 26,1.\nω ≈ 5,11 rad/s; f = ω/(2.π) ≈ 0,81 Hz (khoảng 0,81 vòng mỗi giây)." },
          en: { q: "A conical pendulum has a string of length ℓ = 0.75 m. Find the angular speed and the frequency needed for the string to make an angle α = 60° with the vertical. Take g = 9.8 m/s².",
                a: "Radius of the circle: r = ℓ.sinα.\nThe resultant of vec{T} and vec{P} is horizontal, with magnitude P.tanα = m.g.tanα.\nm.g.tanα = m.ω².ℓ.sinα ⇒ ω² = g/(ℓ.cosα) = 9.8/(0.75 × 0.5) ≈ 26.1.\nω ≈ 5.11 rad/s; f = ω/(2.π) ≈ 0.81 Hz (about 0.81 turns per second)." } },
        { t: "p",
          vi: "Khi ô tô vào cua trên mặt đường nằm ngang, [[static-friction|lực ma sát nghỉ]] giữa lốp và mặt đường đóng vai trò lực hướng tâm. Vì F_{ht} = m.υ²/r, xe chạy càng nhanh hoặc cua càng gắt thì lực cần thiết càng lớn, nên xe phải giảm tốc khi vào cung đường tròn. Trên [[banked-road|mặt đường nghiêng]] về phía tâm, hợp lực của trọng lực và phản lực của mặt đường cũng góp phần tạo ra lực hướng tâm, giúp xe vào cua an toàn hơn (Hình 32.6).",
          en: "When a car goes round a bend on a flat road, the [[static-friction|static friction]] between the tyres and the road is the centripetal force. Since F_{ht} = m.υ²/r, a faster car or a sharper bend needs a larger force, so vehicles must slow down on curves. On a [[banked-road|banked road]] tilted towards the centre, the resultant of the weight and the normal reaction of the road also helps to provide the centripetal force, so the car can take the bend more safely (Figure 32.6)." },
        { t: "note", ngoaiSGK: true,
          vi: "Gợi ý cho mục “Em có thể”: (1) Ở đỉnh cầu vồng lên, P − N = m.υ²/r nên áp lực của xe lên cầu nhỏ hơn trọng lượng; ở cầu võng xuống, N − P = m.υ²/r nên áp lực lớn hơn trọng lượng, cầu dễ hỏng hơn. (2) Trong xiếc mô tô bay, phản lực của thành lồng đóng vai trò lực hướng tâm; xe chạy đủ nhanh thì phản lực này đủ lớn để ma sát nghỉ cân bằng được trọng lực nên xe không rơi.",
          en: "Hints for the “You can” box: (1) At the top of an arched (convex) bridge, P − N = m.υ²/r, so the car presses on the bridge with a force smaller than its weight; on a dipped (concave) bridge, N − P = m.υ²/r, so the force is larger than the weight and the bridge is more easily damaged. (2) In the “wall of death” motorbike show, the normal force from the wall is the centripetal force; if the bike is fast enough, this force is large enough for static friction to balance the weight, so the bike does not fall." },
        { t: "h", vi: "Em có biết? Chuyển động li tâm", en: "Did you know? Centrifugal motion" },
        { t: "p",
          vi: "Đặt một vật trên bàn quay. Khi tăng tốc độ góc ω đến mức lực ma sát nghỉ cực đại nhỏ hơn lực hướng tâm cần thiết m.ω².r, vật trượt ra xa tâm rồi văng khỏi bàn theo phương tiếp tuyến. Đó là [[centrifugal-motion|chuyển động li tâm]]. Thùng máy giặt có nhiều lỗ nhỏ: khi thùng quay nhanh, nước trong quần áo không được giữ lại nên văng ra ngoài qua các lỗ.",
          en: "Put an object on a turntable. When the angular speed ω becomes so large that the maximum static friction is smaller than the centripetal force needed, m.ω².r, the object slides outwards and leaves the table along a tangent. This is called [[centrifugal-motion|centrifugal motion]]. A washing-machine drum has many small holes: when it spins fast, nothing holds the water in the clothes on the circle, so it flies out through the holes." }
      ],
      summary: [
        { vi: "Lực (hay hợp lực) tác dụng lên vật chuyển động tròn đều, hướng vào tâm và gây ra gia tốc hướng tâm gọi là lực hướng tâm.", en: "The force (or resultant force) on an object in uniform circular motion that points towards the centre and causes centripetal acceleration is the centripetal force." },
        { vi: "Gia tốc trong chuyển động tròn đều luôn hướng vào tâm: a_{ht} = υ²/r = ω².r.", en: "The acceleration in uniform circular motion always points towards the centre: a_{ht} = υ²/r = ω².r." },
        { vi: "Độ lớn lực hướng tâm: F_{ht} = m.a_{ht} = m.υ²/r = m.ω².r.", en: "Magnitude of the centripetal force: F_{ht} = m.a_{ht} = m.υ²/r = m.ω².r." },
        { vi: "Lực căng dây, lực hấp dẫn, lực ma sát nghỉ hoặc hợp lực của nhiều lực đều có thể đóng vai trò lực hướng tâm.", en: "Tension, gravitational force, static friction or the resultant of several forces can each act as the centripetal force." }
      ],
      check: [
        { q: { vi: "Lực hướng tâm tác dụng lên vật chuyển động tròn đều có đặc điểm nào sau đây?", en: "Which statement about the centripetal force on an object in uniform circular motion is correct?" },
          o: [
            { vi: "Là một loại lực mới, chỉ xuất hiện khi vật quay.", en: "It is a new kind of force that appears only when an object turns." },
            { vi: "Luôn có phương tiếp tuyến với quỹ đạo.", en: "It always acts along the tangent to the path." },
            { vi: "Hướng ra xa tâm quỹ đạo.", en: "It points away from the centre of the path." },
            { vi: "Là lực hay hợp lực hướng vào tâm quỹ đạo.", en: "It is a force or resultant force directed towards the centre." }
          ], a: 3,
          why: { vi: "Lực hướng tâm là lực (hay hợp lực) hướng vào tâm; nó không phải loại lực mới.", en: "The centripetal force is a force (or resultant force) towards the centre; it is not a new kind of force." } },
        { q: { vi: "Thuật ngữ tiếng Anh của 'gia tốc hướng tâm' là gì?", en: "Which English term means 'gia tốc hướng tâm'?" },
          o: [
            { vi: "centrifugal acceleration", en: "centrifugal acceleration" },
            { vi: "centripetal acceleration", en: "centripetal acceleration" },
            { vi: "angular acceleration", en: "angular acceleration" },
            { vi: "free-fall acceleration", en: "free-fall acceleration" }
          ], a: 1,
          why: { vi: "Centripetal = hướng tâm; centripetal acceleration = gia tốc hướng tâm.", en: "Centripetal means 'towards the centre'; centripetal acceleration = gia tốc hướng tâm." } },
        { q: { vi: "Đang quay cái tẩy buộc vào dây trong mặt phẳng ngang thì buông tay. Ngay sau đó, cái tẩy", en: "You are whirling an eraser on a string in a horizontal circle and let go. Just after that, the eraser" },
          o: [
            { vi: "văng ra theo phương tiếp tuyến với quỹ đạo.", en: "flies off along the tangent to the path." },
            { vi: "tiếp tục chuyển động tròn.", en: "keeps moving in a circle." },
            { vi: "bay theo phương bán kính, ra xa tâm.", en: "flies outwards along the radius." },
            { vi: "rơi thẳng đứng xuống đất.", en: "falls vertically to the ground." }
          ], a: 0,
          why: { vi: "Không còn lực căng dây (lực hướng tâm), tẩy tiếp tục chuyển động theo hướng vận tốc lúc buông, tức theo tiếp tuyến.", en: "With no tension (no centripetal force), the eraser keeps moving in the direction of its velocity at that moment, i.e. along the tangent." } },
        { q: { vi: "Ô tô vào một khúc cua tròn nằm ngang. Nếu tốc độ của xe tăng gấp đôi thì lực ma sát nghỉ cần thiết để giữ xe trên quỹ đạo", en: "A car takes a flat circular bend. If its speed is doubled, the static friction needed to keep it on the curve" },
          o: [
            { vi: "giảm một nửa.", en: "halves." },
            { vi: "không đổi.", en: "stays the same." },
            { vi: "tăng gấp đôi.", en: "doubles." },
            { vi: "tăng gấp bốn.", en: "becomes four times larger." }
          ], a: 3,
          why: { vi: "Ma sát nghỉ là lực hướng tâm, F_{ht} = m.υ²/r tỉ lệ với υ², nên υ tăng 2 lần thì lực tăng 4 lần. Vì vậy xe phải giảm tốc khi vào cua.", en: "Static friction is the centripetal force; F_{ht} = m.υ²/r is proportional to υ², so doubling υ makes the force four times larger. That is why cars slow down on bends." } },
        { q: { vi: "Vệ tinh chuyển động tròn đều quanh Trái Đất với bán kính quỹ đạo 7 000 km và tốc độ 7,57 km/s. Gia tốc hướng tâm của vệ tinh xấp xỉ", en: "A satellite moves uniformly around the Earth with an orbit radius of 7000 km and a speed of 7.57 km/s. Its centripetal acceleration is about" },
          o: [
            { vi: "1,08.10^{-3} m/s².", en: "1.08 × 10^{-3} m/s²." },
            { vi: "8,19 m/s².", en: "8.19 m/s²." },
            { vi: "9,8 m/s².", en: "9.8 m/s²." },
            { vi: "8,19.10^{3} m/s².", en: "8.19 × 10^{3} m/s²." }
          ], a: 1,
          why: { vi: "a_{ht} = υ²/r = (7 570 m/s)²/(7,0.10^{6} m) ≈ 8,19 m/s². Nhớ đổi km sang m.", en: "a_{ht} = υ²/r = (7570 m/s)²/(7.0 × 10^{6} m) ≈ 8.19 m/s². Remember to convert km to m." } }
      ]
    }
  ],

  terms: [
    /* Bài 31 */
    { id: "circular-motion", l: 31, vi: "Chuyển động tròn", en: "circular motion", ipa: "/ˈsɜːkjələ ˈməʊʃn/",
      pos: "n", sym: "", unit: "",
      defVi: "Chuyển động có quỹ đạo là một đường tròn (hoặc một cung tròn).",
      defEn: "Motion along a circle or an arc of a circle.",
      exEn: "The tip of a fan blade is in circular motion.", exVi: "Đầu cánh quạt đang quay thực hiện chuyển động tròn." },
    { id: "arc-length", l: 31, vi: "Độ dài cung (quãng đường đi)", en: "arc length", ipa: "/ˈɑːk leŋθ/",
      pos: "n", sym: "s", unit: "m",
      defVi: "Độ dài phần đường tròn mà vật đi được; trong chuyển động tròn, đó chính là quãng đường đi s.",
      defEn: "The length of the part of the circle that an object travels along; in circular motion it is the distance travelled s.",
      exEn: "An arc length equal to the radius corresponds to an angle of 1 rad.", exVi: "Cung có độ dài bằng bán kính ứng với góc ở tâm 1 rad." },
    { id: "angular-displacement", l: 31, vi: "Độ dịch chuyển góc", en: "angular displacement", ipa: "/ˈæŋɡjələ dɪsˈpleɪsmənt/",
      pos: "n", sym: "θ", unit: "rad",
      defVi: "Góc ở tâm chắn cung mà vật đi được trong một khoảng thời gian; θ = s/r.",
      defEn: "The angle subtended at the centre of the circle by the arc travelled by the object; θ = s/r.",
      exEn: "In three hours the hour hand has an angular displacement of π/2 rad.", exVi: "Sau ba giờ, kim giờ có độ dịch chuyển góc là π/2 rad." },
    { id: "radian", l: 31, vi: "Rađian", en: "radian", ipa: "/ˈreɪdiən/",
      pos: "n", sym: "rad", unit: "rad",
      defVi: "Đơn vị đo góc: 1 rad là góc ở tâm chắn cung có độ dài bằng bán kính đường tròn; 360° = 2.π rad.",
      defEn: "A unit of angle: one radian is the angle subtended at the centre of a circle by an arc equal in length to the radius; 360° = 2.π rad.",
      exEn: "A right angle is π/2 radians.", exVi: "Góc vuông bằng π/2 rađian." },
    { id: "uniform-circular-motion", l: 31, vi: "Chuyển động tròn đều", en: "uniform circular motion", ipa: "/ˈjuːnɪfɔːm ˈsɜːkjələ ˈməʊʃn/",
      pos: "n", sym: "", unit: "",
      defVi: "Chuyển động có quỹ đạo tròn và tốc độ không đổi.",
      defEn: "Motion along a circular path at constant speed.",
      exEn: "A point on a steadily turning wheel is in uniform circular motion.", exVi: "Một điểm trên bánh xe quay đều chuyển động tròn đều." },
    { id: "angular-speed", l: 31, vi: "Tốc độ góc", en: "angular speed", ipa: "/ˈæŋɡjələ spiːd/",
      pos: "n", sym: "ω", unit: "rad/s",
      defVi: "Đại lượng bằng độ dịch chuyển góc chia cho thời gian dịch chuyển; cho biết vật quay nhanh hay chậm: ω = θ/t.",
      defEn: "The angular displacement divided by the time taken; it shows how fast an object turns: ω = θ/t.",
      exEn: "All points on a rotating disc have the same angular speed.", exVi: "Mọi điểm trên một đĩa đang quay có cùng tốc độ góc." },
    { id: "instantaneous-velocity", l: 31, vi: "Vận tốc tức thời", en: "instantaneous velocity", ipa: "/ˌɪnstənˈteɪniəs vəˈlɒsəti/",
      pos: "n", sym: "vec{v}", unit: "m/s",
      defVi: "Vận tốc của vật tại một thời điểm; trong chuyển động tròn, vectơ vận tốc tức thời luôn tiếp tuyến với quỹ đạo.",
      defEn: "The velocity of an object at one instant; in circular motion this vector is always tangent to the path.",
      exEn: "The instantaneous velocity of a car on a roundabout keeps changing direction.", exVi: "Vận tốc tức thời của ô tô chạy quanh vòng xuyến luôn thay đổi hướng." },
    { id: "tangent", l: 31, vi: "Tiếp tuyến", en: "tangent", ipa: "/ˈtændʒənt/",
      pos: "n", sym: "", unit: "",
      defVi: "Đường thẳng chạm đường tròn tại đúng một điểm và vuông góc với bán kính tại điểm đó.",
      defEn: "A straight line that touches a circle at one point and is perpendicular to the radius at that point.",
      exEn: "Sparks from a grinding wheel fly off along the tangent.", exVi: "Tia lửa từ đá mài văng ra theo phương tiếp tuyến." },
    { id: "period", l: 31, vi: "Chu kì", en: "period", ipa: "/ˈpɪəriəd/",
      pos: "n", sym: "T", unit: "s",
      defVi: "Thời gian để vật chuyển động tròn đều quay hết một vòng: T = 2.π/ω.",
      defEn: "The time taken for one complete turn in uniform circular motion: T = 2.π/ω.",
      exEn: "The period of the minute hand is one hour.", exVi: "Chu kì của kim phút là một giờ." },
    { id: "frequency", l: 31, vi: "Tần số", en: "frequency", ipa: "/ˈfriːkwənsi/",
      pos: "n", sym: "f", unit: "Hz",
      defVi: "Số vòng vật đi được trong một giây: f = 1/T; đơn vị là héc (Hz).",
      defEn: "The number of turns made per second: f = 1/T; its unit is the hertz (Hz).",
      exEn: "A wheel that turns twice per second has a frequency of 2 Hz.", exVi: "Bánh xe quay 2 vòng mỗi giây có tần số 2 Hz." },

    /* Bài 32 */
    { id: "centripetal-force", l: 32, vi: "Lực hướng tâm", en: "centripetal force", ipa: "/ˌsentrɪˈpiːtl fɔːs/",
      pos: "n", sym: "F_{ht}", unit: "N",
      defVi: "Lực (hay hợp lực) tác dụng lên vật chuyển động tròn đều, hướng vào tâm quỹ đạo và gây ra gia tốc hướng tâm: F_{ht} = m.υ²/r.",
      defEn: "The force (or resultant force) on an object in uniform circular motion that acts towards the centre of the path and causes centripetal acceleration: F_{ht} = m.υ²/r.",
      exEn: "Gravity provides the centripetal force on the Moon.", exVi: "Lực hấp dẫn đóng vai trò lực hướng tâm đối với Mặt Trăng." },
    { id: "centripetal-acceleration", l: 32, vi: "Gia tốc hướng tâm", en: "centripetal acceleration", ipa: "/ˌsentrɪˈpiːtl əkˌseləˈreɪʃn/",
      pos: "n", sym: "a_{ht}", unit: "m/s²",
      defVi: "Gia tốc của vật chuyển động tròn đều, luôn hướng vào tâm quỹ đạo: a_{ht} = υ²/r = ω².r.",
      defEn: "The acceleration of an object in uniform circular motion; it always points towards the centre: a_{ht} = υ²/r = ω².r.",
      exEn: "Centripetal acceleration changes the direction of the velocity, not the speed.", exVi: "Gia tốc hướng tâm làm đổi hướng vận tốc chứ không làm đổi tốc độ." },
    { id: "tension", l: 32, vi: "Lực căng dây", en: "tension", ipa: "/ˈtenʃn/",
      pos: "n", sym: "vec{T}", unit: "N",
      defVi: "Lực do sợi dây bị kéo căng tác dụng lên vật buộc vào nó, có phương dọc theo dây.",
      defEn: "The force that a stretched string exerts on an object tied to it, acting along the string.",
      exEn: "The tension in the string keeps the ball moving in a circle.", exVi: "Lực căng dây giữ cho quả bóng chuyển động tròn." },
    { id: "conical-pendulum", l: 32, vi: "Con lắc nón", en: "conical pendulum", ipa: "/ˈkɒnɪkl ˈpendjələm/",
      pos: "n", sym: "", unit: "",
      defVi: "Vật nhỏ treo vào sợi dây, chuyển động tròn đều trong mặt phẳng nằm ngang sao cho dây quét thành một mặt nón.",
      defEn: "A small mass on a string that moves in a horizontal circle so that the string traces out a cone.",
      exEn: "In a conical pendulum, the resultant of tension and weight is the centripetal force.", exVi: "Ở con lắc nón, hợp lực của lực căng và trọng lực là lực hướng tâm." },
    { id: "artificial-satellite", l: 32, vi: "Vệ tinh nhân tạo", en: "artificial satellite", ipa: "/ˌɑːtɪˈfɪʃl ˈsætəlaɪt/",
      pos: "n", sym: "", unit: "",
      defVi: "Thiết bị do con người phóng lên và chuyển động quanh Trái Đất; lực hấp dẫn của Trái Đất đóng vai trò lực hướng tâm.",
      defEn: "A device launched by people that orbits the Earth; the Earth's gravitational force provides its centripetal force.",
      exEn: "Weather forecasts use images from artificial satellites.", exVi: "Dự báo thời tiết sử dụng ảnh chụp từ vệ tinh nhân tạo." },
    { id: "geostationary-satellite", l: 32, vi: "Vệ tinh địa tĩnh", en: "geostationary satellite", ipa: "/ˌdʒiːəʊˈsteɪʃənri ˈsætəlaɪt/",
      pos: "n", sym: "", unit: "",
      defVi: "Vệ tinh nằm trong mặt phẳng xích đạo và có tốc độ góc bằng tốc độ góc tự quay của Trái Đất, nên đứng yên so với mặt đất.",
      defEn: "A satellite in the plane of the equator with the same angular speed as the Earth's rotation, so it stays above the same point on the ground.",
      exEn: "A geostationary satellite has a period of about 24 hours.", exVi: "Vệ tinh địa tĩnh có chu kì khoảng 24 giờ." },
    { id: "static-friction", l: 32, vi: "Lực ma sát nghỉ", en: "static friction", ipa: "/ˌstætɪk ˈfrɪkʃn/",
      pos: "n", sym: "F_{msn}", unit: "N",
      defVi: "Lực ma sát giữ cho vật không trượt trên bề mặt tiếp xúc; độ lớn có giới hạn (giá trị cực đại).",
      defEn: "The friction force that stops an object from sliding on a surface; it has a maximum value.",
      exEn: "On a flat bend, static friction on the tyres provides the centripetal force.", exVi: "Ở khúc cua nằm ngang, ma sát nghỉ tác dụng lên lốp xe là lực hướng tâm." },
    { id: "banked-road", l: 32, vi: "Mặt đường nghiêng (ở khúc cua)", en: "banked road", ipa: "/ˌbæŋkt ˈrəʊd/",
      pos: "n", sym: "", unit: "",
      defVi: "Đoạn đường cong có mặt đường nghiêng về phía tâm, nhờ đó hợp lực của trọng lực và phản lực góp phần tạo ra lực hướng tâm.",
      defEn: "A curved road whose surface is tilted towards the centre, so the resultant of the weight and the normal reaction helps to provide the centripetal force.",
      exEn: "Racing tracks are banked so that cars can corner at high speed.", exVi: "Đường đua được làm nghiêng để xe vào cua với tốc độ cao." },
    { id: "centrifugal-motion", l: 32, vi: "Chuyển động li tâm", en: "centrifugal motion", ipa: "/ˌsentrɪˈfjuːɡl ˈməʊʃn/",
      pos: "n", sym: "", unit: "",
      defVi: "Chuyển động của vật trượt ra xa tâm quay rồi văng ra theo phương tiếp tuyến khi lực tác dụng (ví dụ ma sát nghỉ cực đại) nhỏ hơn lực hướng tâm cần thiết.",
      defEn: "The motion of an object that slides away from the centre and leaves along a tangent because the force on it (e.g. maximum static friction) is smaller than the centripetal force needed.",
      exEn: "A spin dryer uses centrifugal motion to remove water from clothes.", exVi: "Máy vắt dùng chuyển động li tâm để làm ráo nước quần áo." }
  ],

  quiz: {
    minutes: 25,
    mcq: [
      { l: 31,
        q: { vi: "Một rađian là", en: "One radian is" },
        o: [
          { vi: "góc ở tâm chắn cung có độ dài bằng đường kính.", en: "the angle subtended at the centre by an arc equal in length to the diameter." },
          { vi: "góc ở tâm chắn cung có độ dài bằng bán kính.", en: "the angle subtended at the centre by an arc equal in length to the radius." },
          { vi: "góc ở tâm chắn cung có độ dài 1 m.", en: "the angle subtended at the centre by an arc 1 m long." },
          { vi: "góc bằng 1/360 vòng tròn.", en: "an angle equal to 1/360 of a full turn." }
        ], a: 1,
        why: { vi: "Theo định nghĩa: 1 rad là góc ở tâm chắn cung dài bằng bán kính. 1/360 vòng là 1°.", en: "By definition, 1 rad is the angle at the centre standing on an arc as long as the radius. 1/360 of a turn is 1°." } },
      { l: 31,
        q: { vi: "Góc 90° bằng bao nhiêu rađian?", en: "How many radians is 90°?" },
        o: [
          { vi: "π/4 rad", en: "π/4 rad" },
          { vi: "π rad", en: "π rad" },
          { vi: "π/2 rad", en: "π/2 rad" },
          { vi: "2.π rad", en: "2.π rad" }
        ], a: 2,
        why: { vi: "180° = π rad nên 90° = π/2 rad.", en: "180° = π rad, so 90° = π/2 rad." } },
      { l: 31,
        q: { vi: "Hệ thức liên hệ giữa tốc độ υ, tốc độ góc ω và bán kính r của chuyển động tròn đều là", en: "The relation between speed υ, angular speed ω and radius r in uniform circular motion is" },
        o: [
          { vi: "υ = ω.r", en: "υ = ω.r" },
          { vi: "υ = ω/r", en: "υ = ω/r" },
          { vi: "υ = r/ω", en: "υ = r/ω" },
          { vi: "υ = ω².r", en: "υ = ω².r" }
        ], a: 0,
        why: { vi: "Từ θ = s/r và υ = s/t, ω = θ/t suy ra υ = ω.r (công thức 31.4).", en: "From θ = s/r, υ = s/t and ω = θ/t we get υ = ω.r (formula 31.4)." } },
      { l: 31,
        q: { vi: "Một bánh xe quay đều 2 vòng mỗi giây. Tốc độ góc của bánh xe xấp xỉ", en: "A wheel turns steadily at 2 revolutions per second. Its angular speed is about" },
        o: [
          { vi: "2 rad/s.", en: "2 rad/s." },
          { vi: "6,28 rad/s.", en: "6.28 rad/s." },
          { vi: "3,14 rad/s.", en: "3.14 rad/s." },
          { vi: "12,6 rad/s.", en: "12.6 rad/s." }
        ], a: 3,
        why: { vi: "Mỗi vòng là 2.π rad: ω = 2 × 2.π = 4.π ≈ 12,6 rad/s.", en: "Each revolution is 2.π rad: ω = 2 × 2.π = 4.π ≈ 12.6 rad/s." } },
      { l: 31,
        q: { vi: "Phát biểu nào đúng về chuyển động tròn đều?", en: "Which statement about uniform circular motion is correct?" },
        o: [
          { vi: "Vận tốc không đổi cả hướng và độ lớn.", en: "The velocity is constant in both direction and magnitude." },
          { vi: "Tốc độ không đổi nhưng hướng vận tốc luôn thay đổi.", en: "The speed is constant but the direction of the velocity keeps changing." },
          { vi: "Tốc độ góc tăng đều theo thời gian.", en: "The angular speed increases steadily with time." },
          { vi: "Vận tốc luôn hướng vào tâm quỹ đạo.", en: "The velocity always points towards the centre of the path." }
        ], a: 1,
        why: { vi: "Vận tốc tiếp tuyến với quỹ đạo, độ lớn không đổi nhưng hướng luôn thay đổi.", en: "The velocity is tangent to the path; its magnitude is constant but its direction keeps changing." } },
      { l: 32,
        q: { vi: "Trong chuyển động tròn đều, gia tốc của vật", en: "In uniform circular motion, the acceleration of the object" },
        o: [
          { vi: "bằng không vì tốc độ không đổi.", en: "is zero because the speed is constant." },
          { vi: "cùng hướng với vận tốc.", en: "is in the same direction as the velocity." },
          { vi: "luôn hướng vào tâm quỹ đạo.", en: "always points towards the centre of the path." },
          { vi: "luôn hướng ra xa tâm quỹ đạo.", en: "always points away from the centre of the path." }
        ], a: 2,
        why: { vi: "Vận tốc đổi hướng nên có gia tốc; đó là gia tốc hướng tâm, luôn hướng vào tâm.", en: "The velocity changes direction, so there is an acceleration: the centripetal acceleration, which always points towards the centre." } },
      { l: 32,
        q: { vi: "Một vật chuyển động tròn đều. Giữ nguyên bán kính, tăng tốc độ lên 2 lần thì gia tốc hướng tâm", en: "An object moves in uniform circular motion. If the radius stays the same and the speed is doubled, the centripetal acceleration" },
        o: [
          { vi: "tăng 4 lần.", en: "becomes 4 times larger." },
          { vi: "tăng 2 lần.", en: "becomes 2 times larger." },
          { vi: "không đổi.", en: "stays the same." },
          { vi: "giảm 2 lần.", en: "is halved." }
        ], a: 0,
        why: { vi: "a_{ht} = υ²/r tỉ lệ với υ²: υ tăng 2 lần thì a_{ht} tăng 4 lần.", en: "a_{ht} = υ²/r is proportional to υ²: doubling υ makes a_{ht} four times larger." } },
      { l: 32,
        q: { vi: "Lực nào đóng vai trò lực hướng tâm giữ Trái Đất chuyển động quanh Mặt Trời?", en: "Which force acts as the centripetal force that keeps the Earth moving around the Sun?" },
        o: [
          { vi: "Lực ma sát của không gian.", en: "Friction in space." },
          { vi: "Lực li tâm do Trái Đất quay.", en: "A centrifugal force due to the Earth's rotation." },
          { vi: "Lực hấp dẫn của Mặt Trăng lên Trái Đất.", en: "The gravitational force of the Moon on the Earth." },
          { vi: "Lực hấp dẫn của Mặt Trời lên Trái Đất.", en: "The gravitational force of the Sun on the Earth." }
        ], a: 3,
        why: { vi: "Lực hấp dẫn của Mặt Trời hướng về Mặt Trời (tâm quỹ đạo) nên là lực hướng tâm.", en: "The Sun's gravitational pull points towards the Sun (the centre of the orbit), so it is the centripetal force." } },
      { l: 32,
        q: { vi: "Vật 0,5 kg buộc vào dây dài 0,8 m, quay tròn đều trên mặt phẳng nằm ngang nhẵn với tốc độ góc 5 rad/s. Lực căng dây là", en: "A 0.5 kg object on a 0.8 m string moves in a horizontal circle on a smooth surface at an angular speed of 5 rad/s. The tension in the string is" },
        o: [
          { vi: "2 N.", en: "2 N." },
          { vi: "10 N.", en: "10 N." },
          { vi: "12,5 N.", en: "12.5 N." },
          { vi: "20 N.", en: "20 N." }
        ], a: 1,
        why: { vi: "Lực căng là lực hướng tâm: F = m.ω².r = 0,5 × 5² × 0,8 = 10 N.", en: "The tension is the centripetal force: F = m.ω².r = 0.5 × 5² × 0.8 = 10 N." } },
      { l: 32,
        q: { vi: "Thuật ngữ tiếng Anh của 'lực hướng tâm' là gì?", en: "Which English term means 'lực hướng tâm'?" },
        o: [
          { vi: "centrifugal force", en: "centrifugal force" },
          { vi: "tension", en: "tension" },
          { vi: "centripetal force", en: "centripetal force" },
          { vi: "normal force", en: "normal force" }
        ], a: 2,
        why: { vi: "Centripetal force = lực hướng tâm. Tension = lực căng dây; normal force = áp lực/phản lực vuông góc.", en: "Centripetal force = lực hướng tâm. Tension = lực căng dây; normal force = áp lực (perpendicular contact force)." } }
    ],
    tf: [
      { l: 31,
        stem: { vi: "Một chiếc đĩa bán kính 10 cm quay đều, mỗi vòng mất 0,5 s.", en: "A disc of radius 10 cm turns steadily, taking 0.5 s for each revolution." },
        items: [
          { s: { vi: "Chu kì quay là 0,5 s và tần số là 2 Hz.", en: "The period is 0.5 s and the frequency is 2 Hz." }, a: true,
            why: { vi: "T = 0,5 s; f = 1/T = 2 Hz.", en: "T = 0.5 s; f = 1/T = 2 Hz." } },
          { s: { vi: "Tốc độ góc của đĩa xấp xỉ 12,6 rad/s.", en: "The angular speed of the disc is about 12.6 rad/s." }, a: true,
            why: { vi: "ω = 2.π/T = 4.π ≈ 12,6 rad/s.", en: "ω = 2.π/T = 4.π ≈ 12.6 rad/s." } },
          { s: { vi: "Tốc độ của một điểm trên vành đĩa xấp xỉ 12,6 m/s.", en: "The speed of a point on the rim is about 12.6 m/s." }, a: false,
            why: { vi: "υ = ω.r = 12,6 × 0,10 ≈ 1,26 m/s (phải đổi 10 cm = 0,10 m).", en: "υ = ω.r = 12.6 × 0.10 ≈ 1.26 m/s (10 cm must be converted to 0.10 m)." } },
          { s: { vi: "Một điểm cách tâm 5 cm có tốc độ góc bằng một nửa tốc độ góc của điểm trên vành.", en: "A point 5 cm from the centre has half the angular speed of a point on the rim." }, a: false,
            why: { vi: "Mọi điểm trên đĩa có cùng tốc độ góc; chỉ tốc độ υ = ω.r mới giảm một nửa.", en: "All points on the disc have the same angular speed; only the speed υ = ω.r is halved." } }
        ] },
      { l: 32,
        stem: { vi: "Một ô tô khối lượng 1 000 kg chạy với tốc độ không đổi 20 m/s qua một khúc cua tròn nằm ngang bán kính 100 m.", en: "A car of mass 1000 kg travels at a constant 20 m/s round a flat circular bend of radius 100 m." },
        items: [
          { s: { vi: "Gia tốc hướng tâm của ô tô là 4 m/s².", en: "The centripetal acceleration of the car is 4 m/s²." }, a: true,
            why: { vi: "a_{ht} = υ²/r = 20²/100 = 4 m/s².", en: "a_{ht} = υ²/r = 20²/100 = 4 m/s²." } },
          { s: { vi: "Lực hướng tâm tác dụng lên ô tô là 2 000 N.", en: "The centripetal force on the car is 2000 N." }, a: false,
            why: { vi: "F_{ht} = m.a_{ht} = 1 000 × 4 = 4 000 N.", en: "F_{ht} = m.a_{ht} = 1000 × 4 = 4000 N." } },
          { s: { vi: "Lực hướng tâm ở đây do lực ma sát nghỉ giữa lốp xe và mặt đường cung cấp.", en: "Here the centripetal force is provided by static friction between the tyres and the road." }, a: true,
            why: { vi: "Trên đường nằm ngang, trọng lực và phản lực cân bằng theo phương thẳng đứng; chỉ ma sát nghỉ hướng vào tâm.", en: "On a flat road the weight and the normal reaction balance vertically; only static friction points towards the centre." } },
          { s: { vi: "Nếu xe vào cua với tốc độ 40 m/s thì lực hướng tâm cần thiết chỉ tăng gấp đôi.", en: "If the car takes the bend at 40 m/s, the centripetal force needed only doubles." }, a: false,
            why: { vi: "F_{ht} tỉ lệ với υ²: tốc độ tăng 2 lần thì lực cần thiết tăng 4 lần (16 000 N).", en: "F_{ht} is proportional to υ²: doubling the speed makes the force four times larger (16 000 N)." } }
        ] }
    ],
    short: [
      { l: 31,
        q: { vi: "Một đĩa quay đều 90 vòng/phút. Tính tốc độ (m/s) của một điểm cách trục quay 20 cm. (Làm tròn đến hai chữ số thập phân.)", en: "A disc turns steadily at 90 revolutions per minute. Find the speed (in m/s) of a point 20 cm from the axis. (Round to two decimal places.)" },
        ans: "1,88", tol: 0.02, unit: "m/s",
        why: { vi: "ω = 90 × 2.π/60 = 3.π ≈ 9,42 rad/s; υ = ω.r = 9,42 × 0,20 ≈ 1,88 m/s.", en: "ω = 90 × 2.π/60 = 3.π ≈ 9.42 rad/s; υ = ω.r = 9.42 × 0.20 ≈ 1.88 m/s." } },
      { l: 32,
        q: { vi: "Một ô tô khối lượng 1 200 kg chạy đều với tốc độ 36 km/h qua khúc cua tròn nằm ngang bán kính 50 m. Tính độ lớn lực hướng tâm (N) tác dụng lên ô tô.", en: "A car of mass 1200 kg travels at a steady 36 km/h round a flat circular bend of radius 50 m. Find the size of the centripetal force (in N) on the car." },
        ans: "2400", tol: 10, unit: "N",
        why: { vi: "υ = 36 km/h = 10 m/s; F_{ht} = m.υ²/r = 1 200 × 10²/50 = 2 400 N.", en: "υ = 36 km/h = 10 m/s; F_{ht} = m.υ²/r = 1200 × 10²/50 = 2400 N." } }
    ]
  }
});
