# Generated by Django 5.1.1 on 2024-11-01 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0032_alter_transaction_transaction_status_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='transaction_amount',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='transaction_status',
            field=models.CharField(choices=[('Success', 'Success'), ('Failed', 'Failed'), ('Pending', 'Pending')], default='Success', max_length=20),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='transaction_types',
            field=models.CharField(choices=[('Booking', 'Booking'), ('Failed', 'Failed'), ('Cancelled', 'Cancelled'), ('Deposit', 'Deposit')], default='Deposit', max_length=20),
        ),
    ]