using System;
public class MyMessage {
    private string _text;
    public string Text { get => _text; }

    public void SetText(string value){
           _text = value;
        OnChange.Invoke();
    } 

    public event Action OnChange;

    

 
}    




