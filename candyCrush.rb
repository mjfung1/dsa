def candyCrush(str)
  reducible = true

  while reducible
    chars = str.split("")
    reducible = false

    chars.each.with_index do |char, i|
      if (chars[i] == chars[i + 1] && chars[i+1] == chars[i + 2] && chars[i+2] == chars[i + 3] && chars[i+3] == chars[i + 4])
            chars[i] = ""
            chars[i + 1] = ""
            chars[i + 2] = ""
            chars[i + 3] = ""
            chars[i + 4] = ""
            reducible = true
      end

        if (chars[i] == chars[i + 1] && chars[i+1] == chars[i + 2] && chars[i+2] == chars[i + 3])
            chars[i] = ""
            chars[i + 1] = ""
            chars[i + 2] = ""
            chars[i + 3] = ""
            reducible = true
        end

        if (chars[i] == chars[i + 1] && chars[i+1] == chars[i + 2])
        chars[i] = ""
        chars[i + 1] = ""
        reducible = true
      end
    end

    str = chars.join("")
  end

  return str
end

puts candyCrush("zzzaxaaaaxxy") # ay