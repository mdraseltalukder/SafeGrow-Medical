import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className=" mx-auto py-12 md:py-36">
      <div className="grid gap-8 lg:grid-cols-2 container">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">New York</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>198 West 21th Street, Suite 721</p>
              <p>New York NY 10010</p>
              <p>mediclnic@qodeinteractive.com</p>
              <p>Phone: +(880) 101 8990 566</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Amsterdam</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>1314 Fairmont Avenue, Suite 54</p>
              <p>Amsterdam 64723</p>
              <p>mediclnic@qodeinteractive.com</p>
              <p>Phone: +(880) 101 8990 567</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">London</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Green Hill Road, Suite 195</p>
              <p>London 72847</p>
              <p>mediclnic@qodeinteractive.com</p>
              <p>Phone: +(880) 101 8990 568</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">San Francisco</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>2566 Jim Rosa Lane, Suite 139</p>
              <p>San Francisco 94108</p>
              <p>mediclnic@qodeinteractive.com</p>
              <p>Phone: +(880) 101 8990 569</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <form className="space-y-4"
          action="https://formspree.io/f/xzzdayqw" method="POST"
          >
            <Input type="text" placeholder="Name*" className="bg-muted/50" />
            <Input type="email" placeholder="E-mail*" className="bg-muted/50" />
            <Textarea placeholder="Message" className="min-h-[200px] bg-muted/50" />
            <Button className="bg-emerald-400 hover:bg-emerald-500 text-white">
              Contact Us
              <span className="ml-2">→</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

